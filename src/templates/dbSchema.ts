import type { Shape } from '../types';
import { v4 as uuidv4 } from 'uuid';

export const dbSchemaTemplate: Shape[] = [
    // Table 1 — Users
    { id: uuidv4(), type: 'rectangle', x: 80, y: 80, width: 180, height: 160, strokeColor: '#a78bfa', fillColor: '#1a1035', strokeWidth: 2, roughness: 0, opacity: 1, cornerRadius: 6 },
    { id: uuidv4(), type: 'text', x: 130, y: 90, text: '📋 Users', strokeColor: '#a78bfa', fillColor: 'transparent', strokeWidth: 1, roughness: 0, opacity: 1, fontSize: 15, fontFamily: 'Inter' },
    { id: uuidv4(), type: 'text', x: 95, y: 118, text: '🔑 id (PK)', strokeColor: '#fbbf24', fillColor: 'transparent', strokeWidth: 1, roughness: 0, opacity: 1, fontSize: 12, fontFamily: 'Inter' },
    { id: uuidv4(), type: 'text', x: 95, y: 140, text: '📝 name', strokeColor: '#d1d5db', fillColor: 'transparent', strokeWidth: 1, roughness: 0, opacity: 1, fontSize: 12, fontFamily: 'Inter' },
    { id: uuidv4(), type: 'text', x: 95, y: 160, text: '📧 email', strokeColor: '#d1d5db', fillColor: 'transparent', strokeWidth: 1, roughness: 0, opacity: 1, fontSize: 12, fontFamily: 'Inter' },
    { id: uuidv4(), type: 'text', x: 95, y: 180, text: '📅 created_at', strokeColor: '#d1d5db', fillColor: 'transparent', strokeWidth: 1, roughness: 0, opacity: 1, fontSize: 12, fontFamily: 'Inter' },
    // Table 2 — Posts
    { id: uuidv4(), type: 'rectangle', x: 360, y: 80, width: 180, height: 180, strokeColor: '#60a5fa', fillColor: '#0f2035', strokeWidth: 2, roughness: 0, opacity: 1, cornerRadius: 6 },
    { id: uuidv4(), type: 'text', x: 415, y: 90, text: '📋 Posts', strokeColor: '#60a5fa', fillColor: 'transparent', strokeWidth: 1, roughness: 0, opacity: 1, fontSize: 15, fontFamily: 'Inter' },
    { id: uuidv4(), type: 'text', x: 375, y: 118, text: '🔑 id (PK)', strokeColor: '#fbbf24', fillColor: 'transparent', strokeWidth: 1, roughness: 0, opacity: 1, fontSize: 12, fontFamily: 'Inter' },
    { id: uuidv4(), type: 'text', x: 375, y: 140, text: '🔗 user_id (FK)', strokeColor: '#f472b6', fillColor: 'transparent', strokeWidth: 1, roughness: 0, opacity: 1, fontSize: 12, fontFamily: 'Inter' },
    { id: uuidv4(), type: 'text', x: 375, y: 160, text: '📝 title', strokeColor: '#d1d5db', fillColor: 'transparent', strokeWidth: 1, roughness: 0, opacity: 1, fontSize: 12, fontFamily: 'Inter' },
    { id: uuidv4(), type: 'text', x: 375, y: 180, text: '📄 content', strokeColor: '#d1d5db', fillColor: 'transparent', strokeWidth: 1, roughness: 0, opacity: 1, fontSize: 12, fontFamily: 'Inter' },
    // Table 3 — Comments
    { id: uuidv4(), type: 'rectangle', x: 360, y: 320, width: 180, height: 160, strokeColor: '#34d399', fillColor: '#052e1c', strokeWidth: 2, roughness: 0, opacity: 1, cornerRadius: 6 },
    { id: uuidv4(), type: 'text', x: 400, y: 330, text: '📋 Comments', strokeColor: '#34d399', fillColor: 'transparent', strokeWidth: 1, roughness: 0, opacity: 1, fontSize: 15, fontFamily: 'Inter' },
    { id: uuidv4(), type: 'text', x: 375, y: 358, text: '🔑 id (PK)', strokeColor: '#fbbf24', fillColor: 'transparent', strokeWidth: 1, roughness: 0, opacity: 1, fontSize: 12, fontFamily: 'Inter' },
    { id: uuidv4(), type: 'text', x: 375, y: 378, text: '🔗 post_id (FK)', strokeColor: '#f472b6', fillColor: 'transparent', strokeWidth: 1, roughness: 0, opacity: 1, fontSize: 12, fontFamily: 'Inter' },
    { id: uuidv4(), type: 'text', x: 375, y: 398, text: '📝 body', strokeColor: '#d1d5db', fillColor: 'transparent', strokeWidth: 1, roughness: 0, opacity: 1, fontSize: 12, fontFamily: 'Inter' },
    // Relations
    { id: uuidv4(), type: 'arrow', x: 260, y: 155, x2: 360, y2: 155, strokeColor: '#f472b6', fillColor: 'transparent', strokeWidth: 2, roughness: 0, opacity: 1 },
    { id: uuidv4(), type: 'arrow', x: 450, y: 260, x2: 450, y2: 320, strokeColor: '#f472b6', fillColor: 'transparent', strokeWidth: 2, roughness: 0, opacity: 1 },
];
