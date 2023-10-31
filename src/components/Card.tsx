import { useEffect, useState } from 'react';
import { Card } from '../types/flashcard';

interface CardProps {
    card: Card;
}

const Card = ({ card }: CardProps) => {
    const { question, answer } = card;
    const [showAnswer, setShowAnswer] = useState<boolean>(false);

    useEffect(() => {
        setShowAnswer(false);
    }, [card]);

    const handleOnClick = () => setShowAnswer(!showAnswer);

    return <div onClick={handleOnClick}>{showAnswer ? answer : question}</div>;
};

export default Card;
