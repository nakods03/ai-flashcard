import { FlashCard } from '../types/flashcard';

const checkLocalStore = () => {
    const key = 'test-flashcards';
    try {
        window.localStorage.setItem(key, 'test');
        window.localStorage.removeItem(key);
        return true;
    } catch (err) {
        return false;
    }
};

export const retrieveFlashcards = (): FlashCard[] => {
    if (!checkLocalStore()) return [];
    const key = 'flashcards';
    const flashcards = window.localStorage.getItem(key);
    if (!flashcards) return [];
    return JSON.parse(flashcards);
};

export const storeFlashcards = (flashcards: FlashCard[]): boolean => {
    if (!checkLocalStore()) return false;
    const key = 'flashcards';
    window.localStorage.setItem(key, JSON.stringify(flashcards));
    return true;
};
