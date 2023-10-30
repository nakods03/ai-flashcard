import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const RootPage = () => {
    return (
        <>
            <NavBar />
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default RootPage;
