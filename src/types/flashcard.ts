export type Card = {
    id: string;
    question: string;
    answer: string;
};

export type FlashCard = {
    id: string;
    topic: string;
    cards: Card[];
};
