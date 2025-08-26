import styles from './Contact.module.scss';
import { useEffect } from 'react'; 
import DeliveryBlock from '../../components/DeliveryBlock/DeliveryBlock';
import FormBackCall from '../../components/FormBackCall/FormBackCall';
import ContactBlock from '../../components/ContactBlock/ContactBlock';
import SeoMetaTags from '../../components/SeoMetaTags';



function Contact() {
	useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <SeoMetaTags
                title="Доставка и оплата - RiteC"
                description="Быстрая доставка 3D моделей по России. Удобные способы оплаты."
                keywords="доставка 3D печать, стоимость доставки, оплата"
                image="/images/delivery-og.jpg"
                url="/contact"
            />
            <div className={styles.wrapper}>
                <DeliveryBlock className={styles.form__block} title={'Обратная связь'}>
                    <div className={styles.form__container}>
                        <FormBackCall />
                    </div>
                </DeliveryBlock>

                <DeliveryBlock className={styles.contact__block} title={'Контактная информация'}>
                    <ContactBlock />
                </DeliveryBlock>
            </div>
        </>
    );
}
export default Contact;
