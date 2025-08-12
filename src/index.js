import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/index.scss';
import Home from './pages/Home/Home';
import About from './pages/About/About';
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
        path: '/about',
        element: <About />,
    },
]);
root.render(
    
        <RouterProvider router={router} />
    
);
