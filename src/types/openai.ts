import { Card } from './flashcard';

export type OpenAIResponse = Omit<Card, 'id'>[];
