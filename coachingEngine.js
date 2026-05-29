import { translations } from './translations.js';

let recognition = null;
let currentLanguage = 'en';
let synth = window.speechSynthesis;

// Configuration of voice personalities
export const personalities = {
  "Energetic (Puck)": { pitch: 1.25, rate: 1.15, langEN: "Puck", langAR: "باك" },
  "Authoritative (Charon)": { pitch: 0.75, rate: 0.90, langEN: "Charon", langAR: "شارون" },
  "Professional (Kore)": { pitch: 1.0, rate: 1.00, langEN: "Kore", langAR: "كوري" },
  "Strong (Fenrir)": { pitch: 0.85, rate: 1.05, langEN: "Fenrir", langAR: "فينرير" },
  "Calm (Zephyr)": { pitch: 1.0, rate: 0.85, langEN: "Zephyr", langAR: "زفير" }
};

export function setLanguage(lang) {
  currentLanguage = lang;
}

// Speaks out loud using Web Speech Synthesis
let currentLocalAudio = null;

function playNativeSynthesis(text, personalityName, onStart, onEnd) {
  if (!synth) return;
  synth.cancel(); // Stop any ongoing speech

  const utterance = new SpeechSynthesisUtterance(text);
  const personality = personalities[personalityName] || personalities["Professional (Kore)"];

  utterance.pitch = personality.pitch;
  utterance.rate = personality.rate;
  utterance.lang = currentLanguage === 'ar' ? 'ar-AE' : 'en-US';

  // Attempt to select an appropriate browser voice
  const voices = synth.getVoices();
  let matchedVoice = null;
  if (currentLanguage === 'ar') {
    matchedVoice = voices.find(v => v.lang.startsWith('ar'));
  } else {
    // Look for male/female/premium voices based on personality
    if (personalityName.includes("Puck") || personalityName.includes("Zephyr")) {
      matchedVoice = voices.find(v => v.lang.startsWith('en') && v.name.toLowerCase().includes('female'));
    } else {
      matchedVoice = voices.find(v => v.lang.startsWith('en') && v.name.toLowerCase().includes('male'));
    }
    if (!matchedVoice) {
      matchedVoice = voices.find(v => v.lang.startsWith('en'));
    }
  }

  if (matchedVoice) {
    utterance.voice = matchedVoice;
  }

  utterance.onstart = onStart;
  utterance.onend = onEnd;
  utterance.onerror = (e) => {
    console.error("Speech Synthesis Error:", e);
    if (onEnd) onEnd();
  };

  synth.speak(utterance);
}

export function speakText(text, personalityName, onStart, onEnd) {
  stopSpeaking();

  const personality = personalities[personalityName] || personalities["Professional (Kore)"];

  // First try the local high-fidelity SSML TTS server
  if (currentLanguage === 'ar' || currentLanguage === 'en') {
    const gender = (personalityName.includes("Puck") || personalityName.includes("Zephyr")) ? "female" : "male";
    const audioUrl = `http://localhost:5002/api/tts?text=${encodeURIComponent(text)}&gender=${gender}&lang=${currentLanguage}&rate=${personality.rate}&pitch=${personality.pitch}`;
    
    const audio = new Audio();
    currentLocalAudio = audio;
    
    let fallbackTriggered = false;
    const triggerFallback = () => {
      if (fallbackTriggered) return;
      fallbackTriggered = true;
      console.warn("Local TTS server unreachable. Falling back to native browser speech synthesis.");
      playNativeSynthesis(text, personalityName, onStart, onEnd);
    };

    // 1.5 second loading timeout
    const loadTimeout = setTimeout(() => {
      if (audio.readyState < 2) { // HAVE_CURRENT_DATA
        audio.pause();
        triggerFallback();
      }
    }, 1500);

    audio.onplay = () => {
      clearTimeout(loadTimeout);
      if (onStart) onStart();
    };

    audio.onended = () => {
      clearTimeout(loadTimeout);
      if (onEnd) onEnd();
      if (currentLocalAudio === audio) {
        currentLocalAudio = null;
      }
    };

    audio.onerror = () => {
      clearTimeout(loadTimeout);
      triggerFallback();
    };

    audio.src = audioUrl;
    audio.play().catch(err => {
      console.warn("Audio element play failed, falling back:", err);
      triggerFallback();
    });
    return;
  }

  // Fallback default
  playNativeSynthesis(text, personalityName, onStart, onEnd);
}

export function stopSpeaking() {
  if (synth) synth.cancel();
  if (currentLocalAudio) {
    try {
      currentLocalAudio.pause();
    } catch (e) {}
    currentLocalAudio = null;
  }
}

// Toggles Speech Recognition
export function toggleSpeechRecognition(onResult, onStateChange, onError) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    onError("Web Speech Recognition is not supported in this browser. Please type or use quick objections.");
    return false;
  }

  if (recognition) {
    recognition.stop();
    recognition = null;
    onStateChange(false);
    return false;
  }

  recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = currentLanguage === 'ar' ? 'ar-AE' : 'en-US';

  recognition.onstart = () => {
    onStateChange(true);
  };

  recognition.onresult = (event) => {
    const speechResult = event.results[0][0].transcript;
    onResult(speechResult);
  };

  recognition.onerror = (event) => {
    console.error("Speech Recognition Error:", event.error);
    onError(event.error);
    recognition = null;
    onStateChange(false);
  };

  recognition.onend = () => {
    recognition = null;
    onStateChange(false);
  };

  recognition.start();
  return true;
}

// Matches a text input or recognized speech to standard objection responses
export function getCoachResponse(input, personalityName) {
  const dict = translations[currentLanguage];
  const normalized = input.toLowerCase().trim();

  // Determine standard objection keys
  let matchedKey = null;
  if (normalized.includes("expensive") || normalized.includes("price") || normalized.includes("cost") || normalized.includes("غالي") || normalized.includes("سعر") || normalized.includes("تكلفة")) {
    matchedKey = "Too expensive";
  } else if (normalized.includes("size") || normalized.includes("fit") || normalized.includes("stock") || normalized.includes("مقاس") || normalized.includes("قياس") || normalized.includes("متوفر")) {
    matchedKey = "Out of size";
  } else if (normalized.includes("look") || normalized.includes("browse") || normalized.includes("تصفح") || normalized.includes("أتفرج") || normalized.includes("أنظر")) {
    matchedKey = "Just looking";
  } else if (normalized.includes("brand x") || normalized.includes("compare") || normalized.includes("competitor") || normalized.includes("منافس") || normalized.includes("مقارنة") || normalized.includes("ماركة")) {
    matchedKey = "Compare with brand X";
  }

  if (matchedKey) {
    const replies = dict.coachResponses[matchedKey];
    // Find matching personality or fall back to professional
    return replies[personalityName] || replies["Professional (Kore)"] || dict.coachResponses["default"];
  }

  // Generate generic retail advice if no exact objection matched
  const welcomeBack = currentLanguage === 'ar' ? 
    `بصفتي مدربك بأسلوب ${personalityName}، أنصحك بالاستماع جيداً وتلبية رغبة العميل. هل يمكنك إعادة صياغة السؤال كاعتراض (مثلاً: السعر، المقاس، مقارنة مع ماركة أخرى)؟` :
    `As your coach in the ${personalityName} personality, I suggest validating the customer's thought process first. Try asking about specific objections like price, sizing, brand comparisons, or just browsing.`;
  
  return welcomeBack;
}
