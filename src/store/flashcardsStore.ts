import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Flashcard } from '../utils/groqFlashcards';

export interface FlashcardSet {
    id: string;
    name: string;
    createdAt: string;
    cards: Flashcard[];
}

interface FlashcardsState {
    sets: FlashcardSet[];
    activeSetId: string | null;
    addSet: (name: string, cards: Flashcard[]) => string;
    deleteSet: (id: string) => void;
    renameSet: (id: string, name: string) => void;
    deleteCard: (setId: string, cardId: string) => void;
    setActiveSet: (id: string | null) => void;
}

function genId() {
    return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

export const useFlashcardsStore = create<FlashcardsState>()(
    persist(
        (set) => ({
            sets: [],
            activeSetId: null,

            addSet: (name, cards) => {
                const id = genId();
                set(state => ({
                    sets: [{ id, name, createdAt: new Date().toISOString(), cards }, ...state.sets],
                    activeSetId: id,
                }));
                return id;
            },

            deleteSet: (id) => set(state => ({
                sets: state.sets.filter(s => s.id !== id),
                activeSetId: state.activeSetId === id
                    ? (state.sets.find(s => s.id !== id)?.id ?? null)
                    : state.activeSetId,
            })),

            renameSet: (id, name) => set(state => ({
                sets: state.sets.map(s => s.id === id ? { ...s, name } : s),
            })),

            deleteCard: (setId, cardId) => set(state => ({
                sets: state.sets.map(s =>
                    s.id === setId ? { ...s, cards: s.cards.filter(c => c.id !== cardId) } : s
                ),
            })),

            setActiveSet: (id) => set({ activeSetId: id }),
        }),
        { name: 'sketchbyte-flashcards' }
    )
);
