import type { Shape } from '../types';
import { v4 as uuidv4 } from 'uuid';

export const flowchartTemplate: Shape[] = [
    // Start node
    {
        id: uuidv4(), type: 'rectangle', x: 300, y: 80, width: 160, height: 50,
        strokeColor: '#a78bfa', fillColor: '#1e1b4b', strokeWidth: 2,
        roughness: 1, opacity: 1, cornerRadius: 24,
    },
    // Process 1
    {
        id: uuidv4(), type: 'rectangle', x: 300, y: 200, width: 160, height: 50,
        strokeColor: '#60a5fa', fillColor: '#1e3a5f', strokeWidth: 2,
        roughness: 1, opacity: 1, cornerRadius: 4,
    },
    // Decision diamond (using wide short rect)
    {
        id: uuidv4(), type: 'rectangle', x: 270, y: 320, width: 220, height: 60,
        strokeColor: '#f472b6', fillColor: '#3d1a2e', strokeWidth: 2,
        roughness: 1, opacity: 1, cornerRadius: 4,
    },
    // Process 2
    {
        id: uuidv4(), type: 'rectangle', x: 300, y: 450, width: 160, height: 50,
        strokeColor: '#34d399', fillColor: '#064e3b', strokeWidth: 2,
        roughness: 1, opacity: 1, cornerRadius: 4,
    },
    // Arrows
    { id: uuidv4(), type: 'arrow', x: 380, y: 130, x2: 380, y2: 200, strokeColor: '#a78bfa', fillColor: 'transparent', strokeWidth: 2, roughness: 0, opacity: 1 },
    { id: uuidv4(), type: 'arrow', x: 380, y: 250, x2: 380, y2: 320, strokeColor: '#60a5fa', fillColor: 'transparent', strokeWidth: 2, roughness: 0, opacity: 1 },
    { id: uuidv4(), type: 'arrow', x: 380, y: 380, x2: 380, y2: 450, strokeColor: '#f472b6', fillColor: 'transparent', strokeWidth: 2, roughness: 0, opacity: 1 },
    // Labels
    { id: uuidv4(), type: 'text', x: 348, y: 98, text: 'START', strokeColor: '#ffffff', fillColor: 'transparent', strokeWidth: 1, roughness: 0, opacity: 1, fontSize: 14, fontFamily: 'Inter' },
    { id: uuidv4(), type: 'text', x: 322, y: 218, text: 'Process Data', strokeColor: '#ffffff', fillColor: 'transparent', strokeWidth: 1, roughness: 0, opacity: 1, fontSize: 13, fontFamily: 'Inter' },
    { id: uuidv4(), type: 'text', x: 310, y: 342, text: 'Condition? Yes/No', strokeColor: '#ffffff', fillColor: 'transparent', strokeWidth: 1, roughness: 0, opacity: 1, fontSize: 12, fontFamily: 'Inter' },
    { id: uuidv4(), type: 'text', x: 338, y: 468, text: 'Output Result', strokeColor: '#ffffff', fillColor: 'transparent', strokeWidth: 1, roughness: 0, opacity: 1, fontSize: 13, fontFamily: 'Inter' },
];
