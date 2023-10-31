import { Link } from 'react-router-dom';
import { FlashCard } from '../types/flashcard';

interface OverviewCardProps {
    flashcard: FlashCard;
}

const OverviewCard = ({ flashcard }: OverviewCardProps) => {
    const { id, topic } = flashcard;

    return (
        <div>
            <h3>{topic}</h3>
            <div>{topic}</div>
            <Link to={`/flashcard/${id}`}>View Cards →</Link>
        </div>
    );
};

export default OverviewCard;
