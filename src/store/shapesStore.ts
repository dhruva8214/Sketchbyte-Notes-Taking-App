import { create } from 'zustand';
import type { Shape } from '../types';
import { saveToLocalStorage, loadFromLocalStorage } from '../utils/saveLoad';

interface ShapesState {
    shapes: Shape[];
    selectedIds: string[];
    history: Shape[][];
    historyIndex: number;
    addShape: (shape: Shape) => void;
    updateShape: (id: string, updates: Partial<Shape>) => void;
    deleteShape: (id: string) => void;
    deleteSelected: () => void;
    setSelectedIds: (ids: string[]) => void;
    clearCanvas: () => void;
    loadShapes: (shapes: Shape[]) => void;
    undo: () => void;
    redo: () => void;
    pushHistory: () => void;
    saveBoard: (boardId: string) => void;
    loadBoard: (boardId: string) => void;
}

export const useShapesStore = create<ShapesState>((set, get) => ({
    shapes: [],
    selectedIds: [],
    history: [[]],
    historyIndex: 0,

    pushHistory: () => {
        const { shapes, history, historyIndex } = get();
        const newHistory = history.slice(0, historyIndex + 1);
        newHistory.push([...shapes]);
        set({ history: newHistory, historyIndex: newHistory.length - 1 });
    },

    addShape: (shape) => {
        get().pushHistory();
        set((state) => ({ shapes: [...state.shapes, shape] }));
    },

    updateShape: (id, updates) => {
        set((state) => ({
            shapes: state.shapes.map((s) =>
                s.id === id ? ({ ...s, ...updates } as Shape) : s
            ),
        }));
    },

    deleteShape: (id) => {
        get().pushHistory();
        set((state) => ({
            shapes: state.shapes.filter((s) => s.id !== id),
            selectedIds: state.selectedIds.filter((sid) => sid !== id),
        }));
    },

    deleteSelected: () => {
        const { selectedIds } = get();
        get().pushHistory();
        set((state) => ({
            shapes: state.shapes.filter((s) => !selectedIds.includes(s.id)),
            selectedIds: [],
        }));
    },

    setSelectedIds: (ids) => set({ selectedIds: ids }),

    clearCanvas: () => {
        get().pushHistory();
        set({ shapes: [], selectedIds: [] });
    },

    loadShapes: (shapes) => set({ shapes, selectedIds: [], history: [shapes], historyIndex: 0 }),

    undo: () => {
        const { historyIndex, history } = get();
        if (historyIndex > 0) {
            const newIndex = historyIndex - 1;
            set({ shapes: [...history[newIndex]], historyIndex: newIndex, selectedIds: [] });
        }
    },

    redo: () => {
        const { historyIndex, history } = get();
        if (historyIndex < history.length - 1) {
            const newIndex = historyIndex + 1;
            set({ shapes: [...history[newIndex]], historyIndex: newIndex, selectedIds: [] });
        }
    },

    saveBoard: (boardId) => {
        const { shapes } = get();
        saveToLocalStorage(boardId, shapes);
    },

    loadBoard: (boardId) => {
        const shapes = loadFromLocalStorage(boardId);
        if (shapes) {
            set({ shapes, selectedIds: [], history: [shapes], historyIndex: 0 });
        }
    },
}));
