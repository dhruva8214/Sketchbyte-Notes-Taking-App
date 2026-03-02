import Konva from 'konva';
import { jsPDF } from 'jspdf';

export async function exportPNG(stage: Konva.Stage, boardName: string): Promise<void> {
    const dataURL = stage.toDataURL({ pixelRatio: 2, mimeType: 'image/png' });
    const a = document.createElement('a');
    a.href = dataURL;
    a.download = `${boardName.replace(/\s+/g, '_')}.png`;
    a.click();
}

export async function exportSVG(stage: Konva.Stage, boardName: string): Promise<void> {
    // Capture as PNG and embed in SVG for broad compatibility
    const dataURL = stage.toDataURL({ pixelRatio: 2 });
    const w = stage.width();
    const h = stage.height();
    const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
  width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <image href="${dataURL}" width="${w}" height="${h}"/>
</svg>`;
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${boardName.replace(/\s+/g, '_')}.svg`;
    a.click();
    URL.revokeObjectURL(url);
}

export async function exportPDF(stage: Konva.Stage, boardName: string): Promise<void> {
    const dataURL = stage.toDataURL({ pixelRatio: 2, mimeType: 'image/png' });

    // Create PDF matching stage dimensions (in internal units, assuming 1 unit = 1 px)
    // We'll use 'px' for exact matching. Alternatively, standard 'pt' or 'mm'.
    const w = stage.width();
    const h = stage.height();
    const orientation = w > h ? 'landscape' : 'portrait';

    const pdf = new jsPDF({
        orientation,
        unit: 'px',
        format: [w, h]
    });

    pdf.addImage(dataURL, 'PNG', 0, 0, w, h);
    pdf.save(`${boardName.replace(/\s+/g, '_')}.pdf`);
}
