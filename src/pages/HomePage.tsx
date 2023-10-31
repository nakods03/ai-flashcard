import { Link } from 'react-router-dom';
import Form from '../components/Form';
import OverviewCardList from '../components/OverviewCardList';
import { retrieveFlashcards, storeFlashcards } from '../store/flashcards';
import { useEffect, useState } from 'react';
import { FlashCard } from '../types/flashcard';
import { chatCompletion } from '../openai/openai';

const HomePage = () => {
    const [flashcards, setFlashcards] = useState<FlashCard[]>(retrieveFlashcards());
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const generate = async (topic: string) => {
        const flashcard = await chatCompletion(topic);
        setIsLoading(false);

        if (!flashcard) return;
        setFlashcards((prev) => [...prev, flashcard]);
    };

    const handleOnGenerate = (topic: string) => {
        setIsLoading(true);
        generate(topic);
    };

    useEffect(() => {
        storeFlashcards(flashcards);
    }, [flashcards]);

    return (
        <div>
            <Form isLoading={isLoading} onGenerate={handleOnGenerate} />

            <div>
                <div>
                    <h2>Top Flashcards</h2>
                    <Link to="/flashcards">View All →</Link>
                </div>
                <OverviewCardList flashcards={flashcards} />
            </div>
        </div>
    );
};

export default HomePage;
