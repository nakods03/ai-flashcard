import { useState } from 'react';
import Card from '../components/Card';
import { useParams } from 'react-router-dom';
import { retrieveFlashcards } from '../store/flashcards';

const FlashcardPage = () => {
    const { id } = useParams();
    const [page, setPage] = useState<number>(0);

    const flashcards = retrieveFlashcards();
    const flashcard = flashcards.find((flashcard) => flashcard.id === id);

    if (!flashcard) return <div>Not found</div>;

    const { topic, cards } = flashcard;
    const count = cards.length;

    return (
        <div>
            <h2>{topic}</h2>
            <Card card={cards[page]} />
            <div>
                <button disabled={page === 0} onClick={() => setPage(page - 1)}>
                    Previous
                </button>
                <button disabled={page === count - 1} onClick={() => setPage(page + 1)}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default FlashcardPage;
