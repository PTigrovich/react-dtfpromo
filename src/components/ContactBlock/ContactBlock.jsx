import styles from './ContactBlock.module.scss';
import { ReactComponent as EmailIcon } from '../../assets/images/email.svg';
import { ReactComponent as PhoneIcon } from '../../assets/images/phone.svg';
import IconsDirect from '../IconsDirect/IconsDirect';

function ContactBlock({ title, className, children }) {
    return (
        <div className={styles.contacts__container}>
            <div className={styles.contacts__wrapper}>
                <div className={styles.contacts__info}>
                    <div className={styles.contact__row}>
                        <span className={styles.contact__icon}>
                            <PhoneIcon className={styles.icon} />
                        </span>
                        <span className={styles.contact__text}>Телефон: +7 (123) 456-78-90</span>
                    </div>

                    <div className={styles.contact__row}>
                        <span className={styles.contact__icon}>
                            <EmailIcon className={styles.icon} />
                        </span>
                        <span className={styles.contact__text}>Почта: example@domain.com</span>
                    </div>
                </div>

                <div className={styles.icons__container}>
                    <IconsDirect />
                </div>
            </div>

            <div className={styles.contacts__media}>
                <h3 className={styles.media__title}>Наш офис</h3>
                <h4 className={styles.media__desription}>
                    Кремлёвская набережная, 1, Москва, 109012 <br /> Координаты: 55.751442, 37.615569
                </h4>
                <img src="/images/location.png" alt="Фото офиса" className={styles.media__image} />
            </div>
        </div>
    );
}

export default ContactBlock;
