import type { Shape } from '../types';
import { v4 as uuidv4 } from 'uuid';

export const dsaArrayTemplate: Shape[] = [
    // Array label
    { id: uuidv4(), type: 'text', x: 80, y: 60, text: 'Array: [4, 2, 7, 1, 9, 3]', strokeColor: '#a78bfa', fillColor: 'transparent', strokeWidth: 1, roughness: 0, opacity: 1, fontSize: 18, fontFamily: 'Space Grotesk' },
    // Array cells
    ...[4, 2, 7, 1, 9, 3].map((val, i) => ({
        id: uuidv4(), type: 'rectangle' as const, x: 80 + i * 80, y: 100, width: 70, height: 60,
        strokeColor: val === 1 ? '#f472b6' : '#60a5fa', fillColor: val === 1 ? '#3d1a2e' : '#0f2035',
        strokeWidth: 2, roughness: 0, opacity: 1, cornerRadius: 4,
    })),
    ...[4, 2, 7, 1, 9, 3].map((val, i) => ({
        id: uuidv4(), type: 'text' as const, x: 103 + i * 80, y: 120, text: String(val),
        strokeColor: '#ffffff', fillColor: 'transparent', strokeWidth: 1, roughness: 0, opacity: 1, fontSize: 22, fontFamily: 'Space Grotesk',
    })),
    // Index labels
    ...[0, 1, 2, 3, 4, 5].map((i) => ({
        id: uuidv4(), type: 'text' as const, x: 107 + i * 80, y: 169, text: `[${i}]`,
        strokeColor: '#6b7280', fillColor: 'transparent', strokeWidth: 1, roughness: 0, opacity: 1, fontSize: 12, fontFamily: 'Inter',
    })),
    // Pointer arrow (at min element)
    { id: uuidv4(), type: 'arrow', x: 315, y: 240, x2: 315, y2: 165, strokeColor: '#f472b6', fillColor: 'transparent', strokeWidth: 2, roughness: 0, opacity: 1 },
    { id: uuidv4(), type: 'text', x: 270, y: 248, text: 'min = 1', strokeColor: '#f472b6', fillColor: 'transparent', strokeWidth: 1, roughness: 0, opacity: 1, fontSize: 14, fontFamily: 'Space Grotesk' },
    // Stack section
    { id: uuidv4(), type: 'text', x: 80, y: 310, text: 'Stack (LIFO)', strokeColor: '#a78bfa', fillColor: 'transparent', strokeWidth: 1, roughness: 0, opacity: 1, fontSize: 16, fontFamily: 'Space Grotesk' },
    { id: uuidv4(), type: 'rectangle', x: 80, y: 336, width: 100, height: 44, strokeColor: '#a78bfa', fillColor: '#1e1b4b', strokeWidth: 2, roughness: 0, opacity: 1, cornerRadius: 2 },
    { id: uuidv4(), type: 'text', x: 108, y: 350, text: 'TOP → 9', strokeColor: '#ffffff', fillColor: 'transparent', strokeWidth: 1, roughness: 0, opacity: 1, fontSize: 13, fontFamily: 'Inter' },
    { id: uuidv4(), type: 'rectangle', x: 80, y: 380, width: 100, height: 44, strokeColor: '#6b7280', fillColor: '#111827', strokeWidth: 2, roughness: 0, opacity: 1, cornerRadius: 2 },
    { id: uuidv4(), type: 'text', x: 118, y: 394, text: '7', strokeColor: '#9ca3af', fillColor: 'transparent', strokeWidth: 1, roughness: 0, opacity: 1, fontSize: 13, fontFamily: 'Inter' },
    { id: uuidv4(), type: 'rectangle', x: 80, y: 424, width: 100, height: 44, strokeColor: '#6b7280', fillColor: '#111827', strokeWidth: 2, roughness: 0, opacity: 1, cornerRadius: 2 },
    { id: uuidv4(), type: 'text', x: 118, y: 438, text: '4', strokeColor: '#9ca3af', fillColor: 'transparent', strokeWidth: 1, roughness: 0, opacity: 1, fontSize: 13, fontFamily: 'Inter' },
];
