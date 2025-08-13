import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/index.scss';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Delivery from './pages/Delivery/Delivery';




const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/delivery',
        element: <Delivery />,
    },
    {
        path: '/contact',
        element: <Contact />,
    },
]);
root.render(
    
        <RouterProvider router={router} />
    
);
