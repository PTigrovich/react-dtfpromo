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
                        <span className={styles.contact__text}>Телефон: +7(495)204-3904</span>
                    </div>

                    <div className={styles.contact__row}>
                        <span className={styles.contact__icon}>
                            <EmailIcon className={styles.icon} />
                        </span>
                        <span className={styles.contact__text}>Почта: info@dtf.promo</span>
                    </div>
                </div>

                <div className={styles.icons__container}>
                    <IconsDirect />
                </div>
            </div>

            <div className={styles.contacts__media}>
                <h3 className={styles.media__title}>Наш офис</h3>
                <h4 className={styles.media__desription}>
                    Московская область, г.о. Химки, мкр. Сходня, ул. Ленинградская, д.4
                    <br /> Координаты: 55.959127, 37.317643
                </h4>
                <img src="/images/location.png" alt="Фото офиса" className={styles.media__image} />
            </div>
        </div>
    );
}

export default ContactBlock;
