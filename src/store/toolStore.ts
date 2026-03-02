import { create } from 'zustand';
import type { ToolType } from '../types';

interface ToolState {
    activeTool: ToolType;
    strokeColor: string;
    fillColor: string;
    strokeWidth: number;
    roughness: number;
    opacity: number;
    fontSize: number;
    setActiveTool: (tool: ToolType) => void;
    setStrokeColor: (color: string) => void;
    setFillColor: (color: string) => void;
    setStrokeWidth: (width: number) => void;
    setRoughness: (roughness: number) => void;
    setOpacity: (opacity: number) => void;
    setFontSize: (size: number) => void;
}

export const useToolStore = create<ToolState>((set) => ({
    activeTool: 'select',
    strokeColor: '#a78bfa',
    fillColor: 'transparent',
    strokeWidth: 2,
    roughness: 1,
    opacity: 1,
    fontSize: 16,
    setActiveTool: (tool) => set({ activeTool: tool }),
    setStrokeColor: (color) => set({ strokeColor: color }),
    setFillColor: (color) => set({ fillColor: color }),
    setStrokeWidth: (width) => set({ strokeWidth: width }),
    setRoughness: (roughness) => set({ roughness }),
    setOpacity: (opacity) => set({ opacity }),
    setFontSize: (size) => set({ fontSize: size }),
}));
