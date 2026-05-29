import { translations } from './translations.js';

let currentLanguage = 'en';

export function setLanguage(lang) {
  currentLanguage = lang;
}

// Simulated scan results for different images or the default one
export const defaultAuditData = {
  scanRef: "SCAN_REF_7742.JPG",
  storeLocation: "Flagship - Downtown",
  department: "Men's Premium Apparel",
  auditFrequency: "Bi-Weekly",
  complianceScore: "75%",
  revenueLift: "+12%",
  
  // Bounding boxes coordinates to overlay on the shelf photo
  // [x, y, width, height, label, status_type (compliant, gap, conversion)]
  boundingBoxes: [
    { x: 10, y: 15, w: 22, h: 40, label: "Compliant Stack", type: "compliant" },
    { x: 35, y: 15, w: 20, h: 40, label: "Empty Space (Size 32)", type: "gap" },
    { x: 58, y: 15, w: 20, h: 40, label: "Compliant Stack", type: "compliant" },
    { x: 80, y: 30, w: 15, h: 25, label: "Misplaced Belt", type: "conversion" },
    { x: 15, y: 65, w: 50, h: 20, label: "Missing Promos Sign", type: "compliance_alert" }
  ]
};

// Draw simulated detection overlays on a canvas
export function drawScanBoxes(canvas, imageElement) {
  if (!canvas || !imageElement) return;
  const ctx = canvas.getContext('2d');
  
  // Match canvas dimensions to the rendered image element size
  const rect = imageElement.getBoundingClientRect();
  canvas.width = imageElement.naturalWidth || rect.width || 400;
  canvas.height = imageElement.naturalHeight || rect.height || 300;
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Draw the image onto the canvas first
  ctx.drawImage(imageElement, 0, 0, canvas.width, canvas.height);
  
  // Apply a subtle overlay darkener
  ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  const widthRatio = canvas.width / 100;
  const heightRatio = canvas.height / 100;

  defaultAuditData.boundingBoxes.forEach(box => {
    const rx = box.x * widthRatio;
    const ry = box.y * heightRatio;
    const rw = box.w * widthRatio;
    const rh = box.h * heightRatio;

    // Set colors based on detection type
    let strokeColor = "#10b981"; // Green (Compliant)
    let labelText = box.label;
    
    if (box.type === "gap") {
      strokeColor = "#ef4444"; // Red (Inventory Gap)
      labelText = currentLanguage === 'ar' ? "فجوة مخزون (مقاس 32)" : "Inventory Gap (Size 32)";
    } else if (box.type === "conversion") {
      strokeColor = "#3b82f6"; // Blue (Conversion Opportunity)
      labelText = currentLanguage === 'ar' ? "فرصة بيع (حزام)" : "Cross-Sell (Belt)";
    } else if (box.type === "compliance_alert") {
      strokeColor = "#f59e0b"; // Orange (Compliance issue)
      labelText = currentLanguage === 'ar' ? "لوحة ترويجية غائبة" : "Missing Signage";
    } else {
      labelText = currentLanguage === 'ar' ? "رف ممتثل" : "Compliant Shelf";
    }

    // Draw rectangle outline
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = Math.max(2, Math.floor(canvas.width / 200));
    ctx.strokeRect(rx, ry, rw, rh);

    // Draw solid translucent background for label
    ctx.fillStyle = strokeColor + "cc"; // Add alpha
    const fontSize = Math.max(10, Math.floor(canvas.width / 40));
    ctx.font = `bold ${fontSize}px sans-serif`;
    
    // Label sizing
    const padding = 6;
    const textWidth = ctx.measureText(labelText).width;
    const labelHeight = fontSize + padding * 2;
    
    // Draw label box above or inside the rect
    let labelY = ry - labelHeight;
    if (labelY < 0) labelY = ry;
    
    ctx.fillRect(rx, labelY, textWidth + padding * 2, labelHeight);

    // Draw text inside label box
    ctx.fillStyle = "#ffffff";
    ctx.fillText(labelText, rx + padding, labelY + fontSize + padding / 2);
  });
}

// Triggers PDF Export using jsPDF from window CDN
export function exportAuditReportPDF(auditData) {
  const dict = translations[currentLanguage];
  const { jsPDF } = window.jspdf || {};
  
  if (!jsPDF) {
    alert(currentLanguage === 'ar' ? "عذراً، لم يتم تحميل مكتبة PDF بعد. الرجاء المحاولة مرة أخرى." : "Error: jsPDF library is not loaded yet.");
    return;
  }

  // Create PDF document (portrait, A4)
  const doc = new jsPDF();
  const isRTL = currentLanguage === 'ar';

  // Helper for text alignment and fonts
  // PDF standard fonts don't support full Arabic out-of-the-box easily without embedded font files,
  // so we will write standard bilingual report details using readable layouts.
  // Standard Helvetica handles basic latin letters.
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  
  // Header section
  doc.setTextColor(4, 120, 87); // Emerald Green Primary
  doc.text("Retail Sales Pro - Visual Audit Report", 20, 25);
  doc.setFontSize(10);
  doc.setTextColor(100, 116, 139);
  doc.text(`Reference ID: ${auditData.scanRef} | Generated: ${new Date().toLocaleString()}`, 20, 32);
  
  // Horizontal divider
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.5);
  doc.line(20, 36, 190, 36);

  // Store metadata
  doc.setFontSize(12);
  doc.setTextColor(15, 23, 42);
  doc.setFont("helvetica", "bold");
  doc.text("STORE AUDIT DETAILS", 20, 46);
  doc.setFont("helvetica", "normal");
  doc.text(`Store Location: ${auditData.storeLocation}`, 20, 53);
  doc.text(`Department: ${auditData.department}`, 20, 60);
  doc.text(`Audit Frequency: ${auditData.auditFrequency}`, 20, 67);

  // KPI highlights
  doc.setFillColor(248, 250, 252);
  doc.rect(20, 75, 170, 35, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(4, 120, 87);
  doc.text(`Compliance Score: ${auditData.complianceScore}`, 25, 84);
  
  doc.setTextColor(239, 68, 68); // Red
  doc.text("Status: Action Required", 25, 92);
  
  doc.setTextColor(16, 185, 129); // Green
  doc.text(`Est. Revenue Lift: ${auditData.revenueLift}`, 25, 100);

  // Recommendations section
  doc.setTextColor(15, 23, 42);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.text("AUDIT RECOMMENDATIONS", 20, 123);
  
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.text("- RESTOCK FRONT-OF-HOUSE DENIM DISPLAY (Hero levels low)", 20, 131);
  doc.text("- Implement 'Light-to-Dark' color gradient from aisle entry to improve appeal.", 20, 138);
  doc.text("- Add 'Lifestyle Imagery' at eye level on Pillar 4.", 20, 145);
  doc.text("- Place Leather Belts next to premium jeans for cross-sell opportunity.", 20, 152);

  // Deep dive analysis
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.text("EXECUTIVE ANALYSIS DEEP-DIVE", 20, 167);
  
  doc.setFont("helvetica", "italic");
  doc.setFontSize(10.5);
  doc.setTextColor(71, 85, 105);
  
  const analysisText = "The current floor plan exhibits high traffic velocity but lacks sufficient 'stopping power' in the mid-section. Our analysis suggests that the color blocking on the denim wall is visually dense, creating cognitive friction for the shopper rather than a clear navigation path.";
  const splitText = doc.splitTextToSize(analysisText, 170);
  doc.text(splitText, 20, 175);

  // Footer note
  doc.setDrawColor(226, 232, 240);
  doc.line(20, 260, 190, 260);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(148, 163, 184);
  doc.text("Retail Sales Pro Audit System. Confidential & Proprietary.", 20, 267);

  // Save the PDF
  doc.save(`retail_sales_audit_${auditData.scanRef.split('.')[0]}.pdf`);
}
