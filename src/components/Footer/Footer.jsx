import styles from './Footer.module.scss';
import { NavLink } from 'react-router-dom';
import IconsDirect from '../IconsDirect/IconsDirect';


function Footer() {
    return (
        <footer id="contact" className={styles.footer}>
            <div className={styles.columnLogo}>DTF Promo</div>

            {/* Блок с иконками мессенджеров */}
            <IconsDirect />

            <div className={styles.container}>
                {/* Левая колонка - Контакты */}
                <div className={styles.column}>
                    <h3 className={styles.columnTitle}>Контакты</h3>
                    <div className={styles.contactInfo}>
                        <p>E-mail: example@dtf.promo</p>
                        <p>Phone: +7 (800) 123-45-67</p>
                    </div>
                </div>

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
