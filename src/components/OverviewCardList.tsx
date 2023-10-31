import OverviewCard from './OverviewCard';
import { FlashCard } from '../types/flashcard';

interface OverviewCardListProps {
    flashcards: FlashCard[];
}

const OverviewCardList = ({ flashcards }: OverviewCardListProps) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {flashcards.map((flashcard) => (
                <OverviewCard key={flashcard.id} flashcard={flashcard} />
            ))}
        </div>
    );
};

export default OverviewCardList;
