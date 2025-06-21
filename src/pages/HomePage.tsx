import React, { useState } from 'react';
import { uploadToS3 } from '../aws/s3';
import { v4 as uuidv4 } from 'uuid';
import FlashcardPreview from '../components/FlashcardPreview';

type Flashcard = {
  id: string;
  question: string;
  answer: string;
};

const generateDummyFlashcards = (topic: string): Flashcard[] => {
  return [
    {
      id: uuidv4(),
      question: `📚 What is ${topic}?`,
      answer: `${topic} is a fundamental concept in science.`,
    },
    {
      id: uuidv4(),
      question: `❓ Why is ${topic} important?`,
      answer: `${topic} helps us understand nature.`,
    },
    {
      id: uuidv4(),
      question: `🔍 Where is ${topic} used?`,
      answer: `${topic} is used in real-world applications and theories.`,
    },
    {
      id: uuidv4(),
      question: `💡 One example of ${topic}?`,
      answer: `A great example of ${topic} is how it helps solve complex problems.`,
    },
  ];
};

const HomePage = () => {
  const [topic, setTopic] = useState('');
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!topic.trim()) return;

    setLoading(true);
    const cards = generateDummyFlashcards(topic);
    setFlashcards(cards);

    const key = `flashcards/${topic.replace(/\s+/g, '_')}_${Date.now()}.json`;
    const body = JSON.stringify({ topic, flashcards: cards });

    try {
      await uploadToS3(key, body);
      console.log('✅ Uploaded flashcards to S3');
    } catch (error) {
      console.error('❌ Upload failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        padding: '2rem',
        maxWidth: '800px',
        margin: '2rem auto',
        fontFamily: 'Inter, sans-serif',
        background: 'linear-gradient(to right, #fff1eb, #ace0f9)',
        borderRadius: '24px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        animation: 'fadeIn 0.8s ease-in-out',
      }}
    >
      <h1 style={{ fontSize: '2.2rem', textAlign: 'center', marginBottom: '1.5rem', color: '#333' }}>
        🌈 AI Flashcard Generator
      </h1>

      <input
        type="text"
        value={topic}
        placeholder="Enter topic (e.g. Photosynthesis)"
        onChange={(e) => setTopic(e.target.value)}
        style={{
          padding: '0.75rem',
          width: '100%',
          borderRadius: '10px',
          border: '1px solid #ccc',
          marginBottom: '1rem',
          fontSize: '1rem',
          boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.05)',
        }}
      />

      <button
        onClick={handleGenerate}
        disabled={loading}
        style={{
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          borderRadius: '10px',
          backgroundColor: '#6c5ce7',
          color: 'white',
          border: 'none',
          cursor: loading ? 'not-allowed' : 'pointer',
          transition: 'background 0.3s',
        }}
      >
        {loading ? 'Generating...' : '✨ Generate Flashcards'}
      </button>

      {flashcards.length > 0 && (
        <div
          style={{
            marginTop: '2.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center',
          }}
        >
          {flashcards.map((card) => (
            <FlashcardPreview key={card.id} question={card.question} answer={card.answer} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
