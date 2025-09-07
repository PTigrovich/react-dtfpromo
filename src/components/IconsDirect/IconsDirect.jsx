import styles from './IconsDirect.module.scss';

// Импортируем SVG иконки (предполагается, что они лежат в папке assets/icons)
import WhatsAppIcon from '../../assets/images/whatsapp-icon.svg';
import TelegramIcon from '../../assets/images/telegram-icon.svg';

const IconsDirect = () => {
    return (
        <div className={styles.messengers}>
            <a href="https://wa.me/+79804117891" target="_blank" rel="noopener noreferrer">
                <img src={WhatsAppIcon} alt="WhatsApp" className={styles.messengerIcon} />
            </a>
            <a href="https://t.me/+79804117891" target="_blank" rel="noopener noreferrer">
                <img src={TelegramIcon} alt="Telegram" className={styles.messengerIcon} />
            </a>
        </div>
    );
};

export default IconsDirect;
