import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/index.scss';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Delivery from './pages/Delivery/Delivery';
import Layout from './components/Layout/Layout';
import Collab from './pages/Collab/Collab';
import Price from './pages/Price/Price';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'price', element: <Price /> },
            { path: 'delivery', element: <Delivery /> },
            { path: 'contact', element: <Contact /> },
            { path: 'collab', element: <Collab /> },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
