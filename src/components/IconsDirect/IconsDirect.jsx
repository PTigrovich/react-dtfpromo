import styles from './IconsDirect.module.scss';

// Импортируем SVG иконки (предполагается, что они лежат в папке assets/icons)
import WhatsAppIcon from '../../assets/images/whatsapp-icon.svg';
import TelegramIcon from '../../assets/images/telegram-icon.svg';
import ViberIcon from '../../assets/images/viber-icon.svg';


const IconsDirect = () => {

    return (
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
    );
};

export default IconsDirect;
