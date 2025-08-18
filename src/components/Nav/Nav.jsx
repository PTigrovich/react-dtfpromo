import { NavLink} from 'react-router-dom';
import styles from './Nav.module.scss';

function Nav() {
    

    return (
        <nav className={styles.header__nav}>
            {/* Home - всегда ведет на главную страницу */}
            <NavLink to="/" className={({ isActive }) => `${styles.nav__link} ${isActive ? styles.active : ''}`}>
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

            <NavLink to="/collab" className={({ isActive }) => `${styles.nav__link} ${isActive ? styles.active : ''}`}>
                Сотрудничество
            </NavLink>
        </nav>
    );
}

export default Nav;
