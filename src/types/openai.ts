import { FlashCard } from './flashcard';

export type OpenAIResponse = Omit<FlashCard, 'id'>[];
