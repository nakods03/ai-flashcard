import tw from 'tailwind-styled-components';
import ReactFlipCard from 'reactjs-flip-card';
import { Card } from '../types/flashcard';
import { useEffect, useState } from 'react';

const StyledCard = tw.div`
    w-full h-full flex flex-col justify-center text-center p-6 border border-solid border-gray-200 rounded-lg shadow-lg 
`;

interface CardProps {
    card: Card;
}

const Card = ({ card }: CardProps) => {
    const { question, answer } = card;
    const [showAnswer, setShowAnswer] = useState<boolean>(false);

    useEffect(() => setShowAnswer(false), [card]);

    const handleOnClick = () => setShowAnswer(!showAnswer);

    const style = {
        container: { width: '22rem', height: '22rem' },
    };

    return (
        <ReactFlipCard
            containerStyle={style.container}
            flipTrigger="disabled"
            flipByProp={showAnswer}
            onClick={handleOnClick}
            direction="vertical"
            frontComponent={<StyledCard>{question}</StyledCard>}
            backComponent={<StyledCard>{answer}</StyledCard>}
        />
    );
};

export default Card;
