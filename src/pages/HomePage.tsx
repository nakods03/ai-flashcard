import { Link } from 'react-router-dom';
import Form from '../components/Form';
import OverviewCardList from '../components/OverviewCardList';
import { retrieveFlashcards, storeFlashcards } from '../store/flashcards';
import { useEffect, useState } from 'react';
import { chatCompletion } from '../openai/openai';
import { FlashCard } from '../types/flashcard';
import { Container, ContainerTop, LinkDiv, RowWrapper, Title } from '../style/style';

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
        <ContainerTop>
            <Form isLoading={isLoading} onGenerate={handleOnGenerate} />

            <Container>
                <RowWrapper>
                    <Title>Top Flashcards</Title>
                    <Link to="/flashcards">
                        <LinkDiv>View All →</LinkDiv>
                    </Link>
                </RowWrapper>
                <OverviewCardList flashcards={flashcards} />
            </Container>
        </ContainerTop>
    );
};

export default HomePage;
