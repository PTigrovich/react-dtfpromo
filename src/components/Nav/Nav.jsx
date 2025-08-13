import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import styles from './Nav.module.scss';

function Nav() {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLinkClick = (e, path) => {
        // Если это переход на Home с любой страницы
        if (path === '/') {
            e.preventDefault();
            navigate('/');
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        // Если это якорная ссылка на текущей странице
        if ((path.startsWith('#blog') || path.startsWith('#contact')) && location.pathname === '/') {
            e.preventDefault();
            const element = document.getElementById(path.substring(1)); // Убираем # из id
            if (element) {
                const headerHeight = 100;
                const offsetPosition = element.offsetTop - headerHeight;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth',
                });
                window.history.pushState({}, '', path); // Обновляем URL
            }
            return;
        }

        // Для обычных переходов между страницами ничего не делаем
        // (NavLink обработает сам)
    };

    return (
        <nav className={styles.header__nav}>
            {/* Home - всегда ведет на главную страницу */}
            <NavLink to="/" className={({ isActive }) => `${styles.nav__link} ${isActive ? styles.active : ''}`} onClick={e => handleLinkClick(e, '/')}>
                Главная
            </NavLink>

            {/* About - обычный переход на страницу */}
            <NavLink to="/delivery" className={({ isActive }) => `${styles.nav__link} ${isActive ? styles.active : ''}`}>
                Доставка
            </NavLink>

            {/* About - обычный переход на страницу */}
            <NavLink to="/contact" className={({ isActive }) => `${styles.nav__link} ${isActive ? styles.active : ''}`}>
                Контакты
            </NavLink>
        </nav>
    );
}

export default Nav;
