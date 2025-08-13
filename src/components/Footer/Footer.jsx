import styles from './Footer.module.scss';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <footer id="contact" className={styles.footer}>
            <div className={styles.columnLogo}>DTF Promo</div>
            <div className={styles.container}>
                {/* Левая колонка - Контакты */}
                <div className={styles.column}>
                    <h3 className={styles.columnTitle}>Контакты</h3>
                    <div className={styles.contactInfo}>
                        <p>E-mail: info@dtfdirect.com</p>
                        <p>Phone: +7 800 88 88</p>
                    </div>
                </div>

                {/* Центральная колонка - DTF Promo */}

                {/* Правая колонка - Быстрые ссылки */}
                <div className={styles.column}>
                    <h3 className={styles.columnTitle}>Навигация</h3>
                    <nav className={styles.footerNav}>
                        <NavLink to="/" className={styles.navLink}>
                            Главная
                        </NavLink>
                        <NavLink to="/delivery" className={styles.navLink}>
                            Доставка
                        </NavLink>
                        <NavLink to="/contact" className={styles.navLink}>
                            Контакты
                        </NavLink>
                    </nav>
                </div>
            </div>

            <div className={styles.copyright}>© {new Date().getFullYear()} DTF Direct. All rights reserved.</div>
        </footer>
    );
}

export default Footer;
