import styles from './Contact.module.scss';
import Layout from '../../components/Layout/Layout';
import DeliveryBlock from '../../components/DeliveryBlock/DeliveryBlock';
import FormBackCall from '../../components/FormBackCall/FormBackCall';
import { ReactComponent as EmailIcon } from '../../assets/images/email.svg';
import { ReactComponent as PhoneIcon } from '../../assets/images/phone.svg';


function Contact() {
    return (
        <Layout>
            <div className={styles.wrapper}>
                <DeliveryBlock className={styles.form__block} title={'Обратная связь'}>
                    <div className={styles.form__container}>
                        <FormBackCall />
                    </div>
                </DeliveryBlock>

                <DeliveryBlock className={styles.contact__block} title={'Контактная информация'}>
                    <div className={styles.contacts__container}>
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

                        <div className={styles.contacts__media}>
                            <h3 className={styles.media__title}>Наш офис</h3>
                            <h4 className={styles.media__desription}>
                                 Кремлёвская набережная, 1, Москва, 109012 <br/> Координаты: 55.751442, 37.615569
                            </h4>
                            <img src="/images/location.png" alt="Фото офиса" className={styles.media__image} />
                        </div>
                    </div>
                </DeliveryBlock>
            </div>
        </Layout>
    );
}
export default Contact;
