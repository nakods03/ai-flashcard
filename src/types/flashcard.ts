export type FlashCard = {
	id: string;
	question: string;
	answer: string;
};

export type FlashCardSet = {
	id: string;
	topic: string;
	cards: FlashCard[];
};
