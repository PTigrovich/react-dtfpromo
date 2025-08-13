import styles from './Contact.module.scss';
import Layout from '../../components/Layout/Layout';
import DeliveryBlock from '../../components/DeliveryBlock/DeliveryBlock';
import FormBackCall from '../../components/FormBackCall/FormBackCall';
import ContactBlock from '../../components/ContactBlock/ContactBlock';


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
                    <ContactBlock/>
                </DeliveryBlock>
            </div>
        </Layout>
    );
}
export default Contact;
