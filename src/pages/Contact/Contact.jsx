import styles from './Contact.module.scss';
import Layout from '../../components/Layout/Layout';
import DeliveryBlock from '../../components/DeliveryBlock/DeliveryBlock';
import FormBackCall from '../../components/FormBackCall/FormBackCall';

function Contact() {
    return (
        <Layout>
            <div className={styles.wrapper}>
                <DeliveryBlock className={styles.form__block} title={'Обратная связь'}>
                    <div class="form-container">
                        <FormBackCall/>
                    </div>
                </DeliveryBlock>
                <DeliveryBlock className={styles.contact__block} title={'Контактная информация'}>
                    <div class="contacts-container">
                        <div class="contacts-info">
                            <div class="contact-row">
                                <span class="contact-icon">📱</span>
                                <span class="contact-text">Телефон: +7 (123) 456-78-90</span>
                            </div>

                            <div class="contact-row">
                                <span class="contact-icon">✉️</span>
                                <span class="contact-text">Почта: example@mail.com</span>
                            </div>
                        </div>

                        <div class="contacts-media">
                            <h3 class="media-title">Наш офис</h3>
                            <img src="/images/office.jpg" alt="Фото офиса" class="media-image" />
                        </div>
                    </div>
                </DeliveryBlock>
            </div>
        </Layout>
    );
}
export default Contact;
