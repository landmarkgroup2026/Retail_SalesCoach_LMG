import { translations } from './translations.js';

let currentLanguage = 'en';
const defaultDocuments = [
  { id: 1, name: "Q3_Retail_Strategy_v2.pdf", size: "4.2 MB", type: "Strategy", status: "INDEXED", updated: "24 Oct 2025, 14:30", language: "ENGLISH" },
  { id: 2, name: "دليل_المبيعات_الداخلي.pdf", size: "1.8 MB", type: "Manual", status: "INDEXED", updated: "Today, 09:12", language: "ARABIC" },
  { id: 3, name: "Client_Objection_Handling.txt", size: "42 KB", type: "Scripts", status: "INDEXED", updated: "21 Oct 2025, 11:05", language: "ENGLISH" },
  { id: 4, name: "Product_Catalog_Updates_v4.pdf", size: "12.5 MB", type: "Product", status: "INDEXED", updated: "19 Oct 2025, 16:45", language: "ENGLISH" }
];

let documentList = [];
try {
  const storedDocs = localStorage.getItem('retail_sales_pro_kb_docs');
  if (storedDocs) {
    documentList = JSON.parse(storedDocs);
  } else {
    documentList = [...defaultDocuments];
    localStorage.setItem('retail_sales_pro_kb_docs', JSON.stringify(documentList));
  }
} catch (e) {
  console.warn("localStorage is not available, falling back to in-memory storage:", e);
  documentList = [...defaultDocuments];
}

let queryVolumeChart = null;
let objectionBreakdownChart = null;
let personalityUsageChart = null;

export function setLanguage(lang) {
  currentLanguage = lang;
}

export function getDocuments() {
  return documentList;
}

export function addDocument(name, size, type, language) {
  const now = new Date();
  const formatTime = now.toLocaleDateString(currentLanguage === 'ar' ? 'ar-AE' : 'en-US', {
    day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
  });
  
  const newDoc = {
    id: Date.now(),
    name: name,
    size: size || "1.2 MB",
    type: type || "Manual",
    status: "INDEXED",
    updated: formatTime,
    language: language || (currentLanguage === 'ar' ? "ARABIC" : "ENGLISH")
  };
  
  documentList.unshift(newDoc);
  try {
    localStorage.setItem('retail_sales_pro_kb_docs', JSON.stringify(documentList));
  } catch (e) {
    console.error("Failed to save document to localStorage:", e);
  }
  return newDoc;
}

export function deleteDocument(id) {
  documentList = documentList.filter(doc => doc.id !== id);
  try {
    localStorage.setItem('retail_sales_pro_kb_docs', JSON.stringify(documentList));
  } catch (e) {
    console.error("Failed to delete document from localStorage:", e);
  }
}

// Initializing beautiful Chart.js charts
export function renderAnalyticsCharts(canvasVolume, canvasObjections, canvasPersonalities) {
  // Clear any existing chart instances to avoid overlap rendering
  if (queryVolumeChart) queryVolumeChart.destroy();
  if (objectionBreakdownChart) objectionBreakdownChart.destroy();
  if (personalityUsageChart) personalityUsageChart.destroy();

  const isArabic = currentLanguage === 'ar';
  
  // Custom Color Constants matching the theme
  const primaryColor = "#047857"; // Emerald Green
  const accentColor = "#10b981"; // Light Emerald
  const slateDark = "#0f172a"; // Dark Slate
  const gridColor = "#f1f5f9";

  // 1. Daily Query Volume (Line Chart)
  if (canvasVolume) {
    const labels = isArabic ? 
      ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"] : 
      ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    
    queryVolumeChart = new Chart(canvasVolume, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: isArabic ? "حجم الاستفسارات" : "Query Volume",
          data: [120, 150, 180, 220, 290, 140, 95],
          borderColor: primaryColor,
          backgroundColor: "rgba(4, 120, 87, 0.08)",
          fill: true,
          tension: 0.4,
          borderWidth: 3,
          pointBackgroundColor: primaryColor
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          y: { grid: { color: gridColor }, ticks: { color: "#64748b" } },
          x: { grid: { display: false }, ticks: { color: "#64748b" } }
        }
      }
    });
  }

  // 2. Common Customer Objections (Bar Chart)
  if (canvasObjections) {
    const labels = isArabic ? 
      ["السعر غالي", "المقاس غير متوفر", "أتصفح فقط", "مقارنة الماركة", "الضمان"] : 
      ["Price Too High", "Out of Size", "Just Browsing", "Brand Compare", "Warranty Query"];

    objectionBreakdownChart = new Chart(canvasObjections, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: isArabic ? "التكرار" : "Frequency",
          data: [45, 32, 28, 19, 12],
          backgroundColor: [primaryColor, accentColor, "#34d399", "#6ee7b7", "#a7f3d0"],
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          y: { grid: { color: gridColor }, ticks: { color: "#64748b" } },
          x: { grid: { display: false }, ticks: { color: "#64748b" } }
        }
      }
    });
  }

  // 3. Usage of Personalities (Polar Area or Donut Chart)
  if (canvasPersonalities) {
    const labels = isArabic ? 
      ["حماسي (باك)", "حازم (شارون)", "مهني (كوري)", "قوي (فينرير)", "هادئ (زفير)"] : 
      ["Energetic (Puck)", "Authoritative (Charon)", "Professional (Kore)", "Strong (Fenrir)", "Calm (Zephyr)"];

    personalityUsageChart = new Chart(canvasPersonalities, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [{
          data: [25, 15, 35, 13, 12],
          backgroundColor: [primaryColor, "#0f172a", "#10b981", "#3b82f6", "#f59e0b"],
          borderWidth: 2,
          borderColor: "#ffffff"
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
            labels: { boxWidth: 15, color: "#475569", padding: 12 }
          }
        },
        cutout: '70%'
      }
    });
  }
}
export function getSystemInsight() {
  return currentLanguage === 'ar' ? 
    translations.ar.systemInsightDesc : 
    translations.en.systemInsightDesc;
}
