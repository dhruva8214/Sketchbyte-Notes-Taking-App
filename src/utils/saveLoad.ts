import type { Shape } from '../types';

const PREFIX = 'ag_board_';

export function saveToLocalStorage(boardId: string, shapes: Shape[]): void {
    try {
        localStorage.setItem(PREFIX + boardId, JSON.stringify(shapes));
    } catch (e) {
        console.warn('LocalStorage save failed:', e);
    }
}

export function loadFromLocalStorage(boardId: string): Shape[] | null {
    try {
        const raw = localStorage.getItem(PREFIX + boardId);
        if (!raw) return null;
        return JSON.parse(raw) as Shape[];
    } catch {
        return null;
    }
}

export function exportJSON(shapes: Shape[], boardName: string): void {
    const data = JSON.stringify({ version: '1.0', name: boardName, shapes }, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${boardName.replace(/\s+/g, '_')}.antigravity`;
    a.click();
    URL.revokeObjectURL(url);
}

export function importJSON(file: File): Promise<Shape[]> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target?.result as string);
                resolve(data.shapes || []);
            } catch {
                reject(new Error('Invalid file format'));
            }
        };
        reader.onerror = () => reject(new Error('File read error'));
        reader.readAsText(file);
    });
}
