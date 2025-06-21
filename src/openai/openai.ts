import { v4 as uuidv4 } from 'uuid';
import { FlashCard } from '../types/flashcard';

const fallbackFlashcard = (topic: string): FlashCard => {
  return {
    id: uuidv4(),
    topic,
    cards: [
      {
        id: uuidv4(),
        question: `What is ${topic}?`,
        answer: `${topic} is a topic you just typed.`,
      },
      {
        id: uuidv4(),
        question: `Why is ${topic} important?`,
        answer: `Because it relates to learning about ${topic}.`,
      },
      {
        id: uuidv4(),
        question: `Give an example of ${topic}.`,
        answer: `An example of ${topic} is... (add something here).`,
      },
    ],
  };
};

export const chatCompletion = async (topic: string): Promise<FlashCard | null> => {
  // ❗ Bypass OpenAI and just return dummy data
  return fallbackFlashcard(topic);
};
