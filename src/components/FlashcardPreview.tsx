import React, { useState } from 'react';
import './Card.css';

interface FlashcardProps {
  question: string;
  answer: string;
}

const FlashcardPreview: React.FC<FlashcardProps> = ({ question, answer }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="card-container" onClick={() => setFlipped(!flipped)}>
      <div className={`card ${flipped ? 'flipped' : ''}`}>
        <div className="front">
          <span style={{ fontSize: '1.1rem' }}>{question}</span>
          <div style={{ fontSize: '0.75rem', color: '#888', marginTop: '0.5rem' }}>🔁 Flip to see answer</div>
        </div>
        <div className="back">
          <span style={{ fontSize: '1.1rem' }}>{answer}</span>
        </div>
      </div>
    </div>
  );
};

export default FlashcardPreview;
