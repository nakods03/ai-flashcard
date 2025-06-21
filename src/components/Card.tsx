import React, { useState } from 'react';
import './Card.css';

interface CardProps {
  question: string;
  answer: string;
}

const Card: React.FC<CardProps> = ({ question, answer }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="card-container" onClick={handleFlip}>
      <div className={`card ${flipped ? 'flipped' : ''}`}>
        <div className="front">
          <p>{question}</p>
        </div>
        <div className="back">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
