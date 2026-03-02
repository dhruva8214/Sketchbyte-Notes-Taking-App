import { create } from 'zustand';
import type { Board, Shape } from '../types';
import { v4 as uuidv4 } from 'uuid';
import { useAuthStore } from './authStore';

const getBoardsKey = () => {
    const user = useAuthStore.getState().user;
    return user ? `ag_boards_${user.uid}` : 'ag_boards';
};

function loadBoards(): Board[] {
    try {
        const raw = localStorage.getItem(getBoardsKey());
        if (!raw) return [];
        return JSON.parse(raw) as Board[];
    } catch {
        return [];
    }
}

function persistBoards(boards: Board[]) {
    localStorage.setItem(getBoardsKey(), JSON.stringify(boards));
}

const createDefaultBoard = (): Board => ({
    id: uuidv4(),
    name: 'My First Board',
    shapes: [],
    createdAt: Date.now(),
    updatedAt: Date.now(),
});

interface BoardState {
    boards: Board[];
    activeBoardId: string;
    createBoard: (name?: string) => Board;
    deleteBoard: (id: string) => void;
    renameBoard: (id: string, name: string) => void;
    setActiveBoard: (id: string) => void;
    updateBoardShapes: (id: string, shapes: Shape[]) => void;
    getActiveBoard: () => Board | undefined;
    reloadBoards: () => void;
}

const initialBoards = loadBoards();
const firstBoard = initialBoards.length > 0 ? initialBoards[0] : createDefaultBoard();

if (initialBoards.length === 0) {
    persistBoards([firstBoard]);
}

export const useBoardStore = create<BoardState>((set, get) => ({
    boards: initialBoards.length > 0 ? initialBoards : [firstBoard],
    activeBoardId: firstBoard.id,

    reloadBoards: () => {
        const loaded = loadBoards();
        const boards = loaded.length > 0 ? loaded : [createDefaultBoard()];
        if (loaded.length === 0) persistBoards(boards);
        set({ boards, activeBoardId: boards[0].id });
    },

    createBoard: (name = 'Untitled Board') => {
        const board: Board = {
            id: uuidv4(),
            name,
            shapes: [],
            createdAt: Date.now(),
            updatedAt: Date.now(),
        };
        set((state) => {
            const boards = [...state.boards, board];
            persistBoards(boards);
            return { boards, activeBoardId: board.id };
        });
        return board;
    },

    deleteBoard: (id) => {
        set((state) => {
            const boards = state.boards.filter((b) => b.id !== id);
            persistBoards(boards);
            const activeBoardId =
                state.activeBoardId === id ? (boards[0]?.id ?? state.activeBoardId) : state.activeBoardId;
            return { boards, activeBoardId };
        });
    },

    renameBoard: (id, name) => {
        set((state) => {
            const boards = state.boards.map((b) => (b.id === id ? { ...b, name } : b));
            persistBoards(boards);
            return { boards };
        });
    },

    setActiveBoard: (id) => set({ activeBoardId: id }),

    updateBoardShapes: (id, shapes) => {
        set((state) => {
            const boards = state.boards.map((b) =>
                b.id === id ? { ...b, shapes, updatedAt: Date.now() } : b
            );
            persistBoards(boards);
            return { boards };
        });
    },

    getActiveBoard: () => {
        const { boards, activeBoardId } = get();
        return boards.find((b) => b.id === activeBoardId);
    },
}));
