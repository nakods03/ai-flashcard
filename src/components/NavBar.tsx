import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/flashcards">My Flashcards</Link>
        </div>
    );
};

export default NavBar;
