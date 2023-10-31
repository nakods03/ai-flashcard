import OpenAI from 'openai';
import { v4 as uuidv4 } from 'uuid';
import { OPENAI_MODEL, OPENAI_API_KEY } from '../config/openai';
import { OpenAIResponse } from '../types/openai';
import { FlashCard } from '../types/flashcard';

const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
});

const transform = (topic: string, res: OpenAIResponse): FlashCard => {
    return {
        id: uuidv4(),
        topic,
        cards: res.map((card) => ({
            id: uuidv4(),
            ...card,
        })),
    };
};

const getContent = (topic: string, count: number = 10) =>
    `Generate ${count} questions and an answer for each, return as a list of json with the field "question" and "answer". The questions are about ${topic}`;

export const chatCompletion = async (topic: string): Promise<FlashCard | null> => {
    try {
        const res = await openai.chat.completions.create({
            messages: [{ role: 'user', content: getContent(topic) }],
            model: OPENAI_MODEL,
        });
        const content = res.choices[0].message.content;
        return content !== null ? transform(topic, JSON.parse(content)) : null;
    } catch (err) {
        console.error(err);
        return null;
    }
};
