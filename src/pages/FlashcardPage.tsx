import { useState } from 'react';
import { useParams } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import Card from '../components/Card';
import { retrieveFlashcards } from '../store/flashcards';
import { Button, ContainerTop, RowWrapper, Title } from '../style/style';

const FlipButton = tw(Button)`
    rounded-md
`;

const FlashcardPage = () => {
    const { id } = useParams();
    const [page, setPage] = useState<number>(0);

    const flashcards = retrieveFlashcards();
    const flashcard = flashcards.find((flashcard) => flashcard.id === id);

    if (!flashcard) return <div>Not found</div>;

    const { topic, cards } = flashcard;
    const count = cards.length;

    return (
        <ContainerTop>
            <Title>{topic}</Title>
            <Card card={cards[page]} />
            <RowWrapper>
                <FlipButton disabled={page === 0} onClick={() => setPage(page - 1)}>
                    Previous
                </FlipButton>
                <FlipButton disabled={page === count - 1} onClick={() => setPage(page + 1)}>
                    Next
                </FlipButton>
            </RowWrapper>
        </ContainerTop>
    );
};

export default FlashcardPage;
