import React from 'react';
import { useToolStore } from '../store/toolStore';
import { useShapesStore } from '../store/shapesStore';
import type { ToolType } from '../types';
import {
    FiMousePointer, FiEdit3, FiSquare, FiCircle, FiMinus,
    FiArrowRight, FiType, FiSlash, FiMove, FiRotateCcw, FiRotateCw, FiTrash2
} from 'react-icons/fi';

interface Tool {
    id: ToolType;
    icon: React.ReactNode;
    label: string;
    shortcut: string;
}

const tools: Tool[] = [
    { id: 'select', icon: <FiMousePointer />, label: 'Select', shortcut: 'V' },
    { id: 'hand', icon: <FiMove />, label: 'Pan', shortcut: 'H' },
    { id: 'pencil', icon: <FiEdit3 />, label: 'Pencil', shortcut: 'P' },
    { id: 'rectangle', icon: <FiSquare />, label: 'Rectangle', shortcut: 'R' },
    { id: 'circle', icon: <FiCircle />, label: 'Circle', shortcut: 'C' },
    { id: 'line', icon: <FiMinus />, label: 'Line', shortcut: 'L' },
    { id: 'arrow', icon: <FiArrowRight />, label: 'Arrow', shortcut: 'A' },
    { id: 'text', icon: <FiType />, label: 'Text', shortcut: 'T' },
    { id: 'eraser', icon: <FiSlash />, label: 'Eraser', shortcut: 'E' },
];

const Toolbar: React.FC = () => {
    const { activeTool, setActiveTool } = useToolStore();
    const { undo, redo, clearCanvas } = useShapesStore();

    React.useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
            const tool = tools.find(t => t.shortcut.toLowerCase() === e.key.toLowerCase());
            if (tool) setActiveTool(tool.id);
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [setActiveTool]);

    return (
        <div className="toolbar">
            <div className="toolbar-logo">
                <div className="toolbar-logo-icon">✦</div>
            </div>

            <div className="toolbar-divider" />

            <div className="toolbar-tools">
                {tools.map((tool) => (
                    <button
                        key={tool.id}
                        onClick={() => setActiveTool(tool.id)}
                        className={`tool-btn ${activeTool === tool.id ? 'active' : ''}`}
                        title={`${tool.label} (${tool.shortcut})`}
                        id={`tool-${tool.id}`}
                    >
                        {tool.icon}
                        <span className="tool-shortcut">{tool.shortcut}</span>
                    </button>
                ))}
            </div>

            <div className="toolbar-divider" />

            <div className="toolbar-actions">
                <button className="tool-btn" onClick={undo} title="Undo (Ctrl+Z)" id="btn-undo">
                    <FiRotateCcw />
                </button>
                <button className="tool-btn" onClick={redo} title="Redo (Ctrl+Y)" id="btn-redo">
                    <FiRotateCw />
                </button>
                <button className="tool-btn danger" onClick={() => {
                    if (confirm('Clear the entire canvas?')) clearCanvas();
                }} title="Clear Canvas" id="btn-clear">
                    <FiTrash2 />
                </button>
            </div>
        </div>
    );
};

export default Toolbar;
