import OverviewCardList from '../components/OverviewCardList';
import { retrieveFlashcards } from '../store/flashcards';

const FlashcardsPage = () => {
    const flashcards = retrieveFlashcards();

    return (
        <div>
            <h2>Flashcards</h2>
            <OverviewCardList flashcards={flashcards} />
        </div>
    );
};

export default FlashcardsPage;
