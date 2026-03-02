import React, { useRef, useState, useEffect } from 'react';
import CanvasStage from '../canvas/CanvasStage';
import Toolbar from '../components/Toolbar';
import Header from '../components/Header';
import PropertiesPanel from '../components/PropertiesPanel';
import BoardsSidebar from '../components/BoardsSidebar';
import TemplateModal from '../components/TemplateModal';
import { useBoardStore } from '../store/boardStore';
import { useShapesStore } from '../store/shapesStore';

const CanvasApp: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [templatesOpen, setTemplatesOpen] = useState(false);

    const { activeBoardId, boards } = useBoardStore();
    const { loadShapes } = useShapesStore();

    // Load active board shapes on mount
    useEffect(() => {
        const board = boards.find(b => b.id === activeBoardId);
        if (board) loadShapes(board.shapes);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="canvas-app">
            <Header
                onToggleSidebar={() => setSidebarOpen(prev => !prev)}
                onOpenTemplates={() => setTemplatesOpen(true)}
            />

            <div className="canvas-body">
                <Toolbar />

                <div className="canvas-container" ref={containerRef}>
                    <CanvasStage containerRef={containerRef} />

                    {/* Zoom hint */}
                    <div className="canvas-hint">
                        Scroll to zoom · Space+drag to pan · Press ? for help
                    </div>
                </div>

                <PropertiesPanel />
            </div>

            <BoardsSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <TemplateModal isOpen={templatesOpen} onClose={() => setTemplatesOpen(false)} />
        </div>
    );
};

export default CanvasApp;
