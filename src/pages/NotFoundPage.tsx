import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { ContainerTop, LinkDiv } from '../style/style';

const NotFoundPage = () => {
    return (
        <>
            <NavBar />
            <ContainerTop>
                <div>
                    Page not found. Click{' '}
                    {
                        <Link to="/">
                            <LinkDiv className="inline">here</LinkDiv>
                        </Link>
                    }{' '}
                    to go back to home page.
                </div>
            </ContainerTop>
        </>
    );
};

export default NotFoundPage;
