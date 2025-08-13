import styles from './Footer.module.scss';
import { NavLink } from 'react-router-dom';

// Импортируем SVG иконки (предполагается, что они лежат в папке assets/icons)
import WhatsAppIcon from '../../assets/images/whatsapp-icon.svg';
import TelegramIcon from '../../assets/images/telegram-icon.svg';
import ViberIcon from '../../assets/images/viber-icon.svg';

function Footer() {
    return (
        <footer id="contact" className={styles.footer}>
            <div className={styles.columnLogo}>DTF Promo</div>

            {/* Блок с иконками мессенджеров */}
            <div className={styles.messengers}>
                <a href="https://wa.me/78008888" target="_blank" rel="noopener noreferrer">
                    <img src={WhatsAppIcon} alt="WhatsApp" className={styles.messengerIcon} />
                </a>
                <a href="https://t.me/dtfpromo" target="_blank" rel="noopener noreferrer">
                    <img src={TelegramIcon} alt="Telegram" className={styles.messengerIcon} />
                </a>
                <a href="viber://chat?number=78008888" target="_blank" rel="noopener noreferrer">
                    <img src={ViberIcon} alt="Viber" className={styles.messengerIcon} />
                </a>
            </div>

            <div className={styles.container}>
                {/* Левая колонка - Контакты */}
                <div className={styles.column}>
                    <h3 className={styles.columnTitle}>Контакты</h3>
                    <div className={styles.contactInfo}>
                        <p>E-mail: info@dtfdirect.com</p>
                        <p>Phone: +7 800 88 88</p>
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
