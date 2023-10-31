import { Link, useLocation } from 'react-router-dom';
import tw from 'tailwind-styled-components';

const Nav = tw.nav`
    w-full flex gap-4 justify-center py-4 mb-8 text-xl font-bold
`;

interface NavLinkProps {
    $active?: boolean;
}
const NavLink = tw.div<NavLinkProps>`
    ${(p) => (p.$active ? 'text-orange-500' : 'text-gray-500')} hover:text-orange-600
`;

const NavBar = () => {
    const location = useLocation();
    const { pathname } = location;

    return (
        <Nav>
            <Link to="/">
                <NavLink $active={pathname === '/'}>Home</NavLink>
            </Link>
            <Link to="/flashcards">
                <NavLink $active={pathname === '/flashcards'}>My Flashcards</NavLink>
            </Link>
        </Nav>
    );
};

export default NavBar;
