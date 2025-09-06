import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Блокируем прокрутку body когда меню открыто
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Очищаем стили при размонтировании компонента
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <>
            {/* Бургер-меню кнопка */}
            <button className={`${styles.burgerButton} ${isMenuOpen ? styles.burgerOpen : ''}`} onClick={toggleMenu} aria-label="Открыть меню">
                <span className={styles.burgerLine}></span>
                <span className={styles.burgerLine}></span>
                <span className={styles.burgerLine}></span>
            </button>

            {/* Обычная навигация для десктопа */}
            <nav className={styles.header__nav}>
                <NavLink to="/" className={({ isActive }) => `${styles.nav__link} ${isActive ? styles.active : ''}`}>
                    Главная
                </NavLink>

                <NavLink to="/price" className={({ isActive }) => `${styles.nav__link} ${isActive ? styles.active : ''}`}>
                    Цены
                </NavLink>

                <NavLink to="/delivery" className={({ isActive }) => `${styles.nav__link} ${isActive ? styles.active : ''}`}>
                    Доставка
                </NavLink>

                <NavLink to="/collab" className={({ isActive }) => `${styles.nav__link} ${isActive ? styles.active : ''}`} end>
                    Сотрудничество
                </NavLink>

                <NavLink to="/contact" className={({ isActive }) => `${styles.nav__link} ${isActive ? styles.active : ''}`}>
                    Контакты
                </NavLink>
            </nav>

            {/* Оверлей для блюра */}
            <div className={`${styles.menuOverlay} ${isMenuOpen ? styles.menuOverlayOpen : ''}`} onClick={closeMenu}></div>

            {/* Мобильное меню */}
            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
                <div className={styles.mobileMenuContent}>
                    <NavLink to="/" className={({ isActive }) => `${styles.mobileNavLink} ${isActive ? styles.active : ''}`} onClick={closeMenu}>
                        Главная
                    </NavLink>

                    <NavLink to="/price" className={({ isActive }) => `${styles.mobileNavLink} ${isActive ? styles.active : ''}`} onClick={closeMenu}>
                        Цены
                    </NavLink>

                    <NavLink to="/delivery" className={({ isActive }) => `${styles.mobileNavLink} ${isActive ? styles.active : ''}`} onClick={closeMenu}>
                        Доставка
                    </NavLink>

                    <NavLink to="/collab" className={({ isActive }) => `${styles.mobileNavLink} ${isActive ? styles.active : ''}`} onClick={closeMenu} end>
                        Сотрудничество
                    </NavLink>

                    <NavLink to="/contact" className={({ isActive }) => `${styles.mobileNavLink} ${isActive ? styles.active : ''}`} onClick={closeMenu}>
                        Контакты
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default Nav;
