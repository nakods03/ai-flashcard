import OverviewCard from './OverviewCard';
import { FlashCard } from '../types/flashcard';
import tw from 'tailwind-styled-components';

interface OverviewCardListProps {
    flashcards: FlashCard[];
}

const EmptyMsg = tw.div`
    text-center text-gray-500
`;

const OverviewCardList = ({ flashcards }: OverviewCardListProps) => {
    return flashcards.length === 0 ? (
        <EmptyMsg>No flashcards yet. Generate your first set!</EmptyMsg>
    ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {flashcards.map((flashcard) => (
                <OverviewCard key={flashcard.id} flashcard={flashcard} />
            ))}
        </div>
    );
};

export default OverviewCardList;
