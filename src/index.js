import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/index.scss';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Delivery from './pages/Delivery/Delivery';
import Layout from './components/Layout/Layout';
import Collab from './pages/Collab/Collab';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'delivery',
                element: <Delivery />,
            },
            {
                path: 'contact',
                element: <Contact />,
            },
            {
                path: 'collab',
                element: <Collab />,
            },
        ],
    },
]);

// Для react-snap
const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
    // Гидратация для предварительно отрендеренного контента
    ReactDOM.hydrateRoot(
        rootElement,
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
} else {
    // Обычный рендер для разработки
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
}
