import OverviewCardList from '../components/OverviewCardList';
import { retrieveFlashcards } from '../store/flashcards';
import { Container, ContainerTop, Title } from '../style/style';

const FlashcardsPage = () => {
    const flashcards = retrieveFlashcards();

    return (
        <ContainerTop>
            <Container>
                <Title>Flashcards</Title>
                <OverviewCardList flashcards={flashcards} />
            </Container>
        </ContainerTop>
    );
};

export default FlashcardsPage;
