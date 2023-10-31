import { FlashCard } from '../types/flashcard';
import OverviewCard from './OverviewCard';

interface OverviewCardListProps {
    flashcards: FlashCard[];
}

const OverviewCardList = ({ flashcards }: OverviewCardListProps) => {
    return (
        <div>
            {flashcards.map((flashcard) => (
                <OverviewCard key={flashcard.id} flashcard={flashcard} />
            ))}
        </div>
    );
};

export default OverviewCardList;
