import { createBrowserRouter } from 'react-router-dom';
import RootPage from './pages/RootPage';
import HomePage from './pages/HomePage';
import FlashcardsPage from './pages/FlashcardsPage';
import FlashcardPage from './pages/FlashcardPage';
import NotFoundPage from './pages/NotFoundPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootPage />,
        errorElement: <NotFoundPage />,
        children: [
            { path: '/', element: <HomePage /> },
            { path: '/flashcards', element: <FlashcardsPage /> },
            { path: '/flashcard/:id', element: <FlashcardPage /> },
        ],
    },
]);
