import { Link } from 'react-router-dom';
import { FlashCard } from '../types/flashcard';
import { LinkDiv } from '../style/style';

interface OverviewCardProps {
    flashcard: FlashCard;
}

const OverviewCard = ({ flashcard }: OverviewCardProps) => {
    const { id, topic } = flashcard;

    return (
        <div className="w-full h-full flex flex-col gap-2 p-6 border border-gray-200 border-solid rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold">{topic}</h3>
            <div>{topic}</div>
            <Link to={`/flashcard/${id}`}>
                <LinkDiv>View Cards →</LinkDiv>
            </Link>
        </div>
    );
};

export default OverviewCard;
