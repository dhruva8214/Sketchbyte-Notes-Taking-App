import React, { useState } from 'react';
import { useBoardStore } from '../store/boardStore';
import { useShapesStore } from '../store/shapesStore';
import { FiPlus, FiTrash2, FiEdit2, FiX } from 'react-icons/fi';

interface BoardsSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const BoardsSidebar: React.FC<BoardsSidebarProps> = ({ isOpen, onClose }) => {
    const { boards, activeBoardId, createBoard, deleteBoard, renameBoard, setActiveBoard, updateBoardShapes } = useBoardStore();
    const { shapes, loadShapes } = useShapesStore();
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editName, setEditName] = useState('');

    const handleSwitchBoard = (boardId: string) => {
        // Save current board
        updateBoardShapes(activeBoardId, shapes);
        // Load new board
        const board = boards.find(b => b.id === boardId);
        if (board) {
            setActiveBoard(boardId);
            loadShapes(board.shapes);
        }
        onClose();
    };

    const handleCreate = () => {
        updateBoardShapes(activeBoardId, shapes);
        createBoard(`Board ${boards.length + 1}`);
        loadShapes([]);
        onClose();
    };

    const handleDelete = (id: string, e: React.MouseEvent) => {
        e.stopPropagation();
        if (boards.length <= 1) { alert('Cannot delete the last board.'); return; }
        if (confirm('Delete this board?')) {
            if (id === activeBoardId) {
                const other = boards.find(b => b.id !== id);
                if (other) { setActiveBoard(other.id); loadShapes(other.shapes); }
            }
            deleteBoard(id);
        }
    };

    const startRename = (id: string, name: string, e: React.MouseEvent) => {
        e.stopPropagation();
        setEditingId(id);
        setEditName(name);
    };

    const commitRename = (id: string) => {
        renameBoard(id, editName || 'Untitled');
        setEditingId(null);
    };

    return (
        <>
            {isOpen && <div className="sidebar-overlay" onClick={onClose} />}
            <aside className={`boards-sidebar ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <span className="sidebar-title">✦ Boards</span>
                    <button className="sidebar-close" onClick={onClose}><FiX /></button>
                </div>

                <button className="sidebar-new-btn" onClick={handleCreate} id="btn-new-board">
                    <FiPlus /> New Board
                </button>

                <div className="sidebar-boards">
                    {boards.map((board) => (
                        <div
                            key={board.id}
                            className={`board-item ${board.id === activeBoardId ? 'active' : ''}`}
                            onClick={() => handleSwitchBoard(board.id)}
                            id={`board-item-${board.id}`}
                        >
                            <div className="board-preview">
                                <span className="board-icon">✦</span>
                            </div>
                            <div className="board-info">
                                {editingId === board.id ? (
                                    <input
                                        className="board-rename-input"
                                        value={editName}
                                        onChange={e => setEditName(e.target.value)}
                                        onBlur={() => commitRename(board.id)}
                                        onKeyDown={e => { if (e.key === 'Enter') commitRename(board.id); }}
                                        onClick={e => e.stopPropagation()}
                                        autoFocus
                                    />
                                ) : (
                                    <span className="board-item-name">{board.name}</span>
                                )}
                                <span className="board-item-meta">
                                    {board.shapes.length} shapes · {new Date(board.updatedAt).toLocaleDateString()}
                                </span>
                            </div>
                            <div className="board-item-actions">
                                <button onClick={(e) => startRename(board.id, board.name, e)} title="Rename">
                                    <FiEdit2 />
                                </button>
                                <button onClick={(e) => handleDelete(board.id, e)} title="Delete" className="danger">
                                    <FiTrash2 />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </aside>
        </>
    );
};

export default BoardsSidebar;
