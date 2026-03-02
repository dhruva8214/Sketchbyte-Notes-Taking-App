import React from 'react';
import { useShapesStore } from '../store/shapesStore';
import { flowchartTemplate } from '../templates/flowchart';
import { dbSchemaTemplate } from '../templates/dbSchema';
import { dsaArrayTemplate } from '../templates/dsaArray';
import type { Shape } from '../types';
import { v4 as uuidv4 } from 'uuid';
import { FiX } from 'react-icons/fi';

interface TemplateModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const templates = [
    {
        id: 'flowchart',
        name: 'System Design',
        description: 'Flowchart with process nodes, decisions, and arrows',
        emoji: '⚡',
        color: '#a78bfa',
        data: flowchartTemplate,
    },
    {
        id: 'dbschema',
        name: 'Database Schema',
        description: 'ER diagram with 3 tables and foreign key relationships',
        emoji: '🗄️',
        color: '#60a5fa',
        data: dbSchemaTemplate,
    },
    {
        id: 'dsa',
        name: 'DSA Visualization',
        description: 'Array cells, index labels, pointer, and stack view',
        emoji: '🧮',
        color: '#34d399',
        data: dsaArrayTemplate,
    },
    {
        id: 'blank-grid',
        name: 'Blank Canvas',
        description: 'Start fresh with an empty infinite canvas',
        emoji: '🌌',
        color: '#6b7280',
        data: [],
    },
];

const TemplateModal: React.FC<TemplateModalProps> = ({ isOpen, onClose }) => {
    const { addShape, clearCanvas } = useShapesStore();

    const handleUse = (data: Shape[]) => {
        if (data.length === 0) {
            clearCanvas();
        } else {
            // Re-ID all shapes to avoid duplicates
            const newShapes = data.map(s => ({ ...s, id: uuidv4() }));
            clearCanvas();
            newShapes.forEach(s => addShape(s));
        }
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="template-modal" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>✦ Templates</h2>
                    <p>Start with a pre-built layout for your diagram</p>
                    <button className="modal-close" onClick={onClose}><FiX /></button>
                </div>
                <div className="template-grid">
                    {templates.map(tmpl => (
                        <div
                            key={tmpl.id}
                            className="template-card"
                            style={{ '--accent': tmpl.color } as React.CSSProperties}
                            onClick={() => handleUse(tmpl.data as Shape[])}
                            id={`template-${tmpl.id}`}
                        >
                            <div className="template-icon">{tmpl.emoji}</div>
                            <div className="template-info">
                                <h3>{tmpl.name}</h3>
                                <p>{tmpl.description}</p>
                            </div>
                            <div className="template-use">Use Template →</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TemplateModal;
