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
                title="DTF Promo Контакты"
                description="Быстрая доставка DTF по России. Удобные способы оплаты."
                keywords="доставка DTF печать, стоимость доставки, оплата печать на одежде москва, принт печать на одежде, печать на текстиле, печать на одежде на заказ, печать принтов на одежде, печать термонаклеек на одежду, печать логотипа на одежде, печать фото на одежде, печать на одежде купить, срочная печать на одежде, печать надписей на одежде, цифровая печать на одежде, печать принта на одежде, нанесение печати на одежду, печать на футболках одежде, печать наклеек на одежду, печать на детской одежде, dtf печать на одежде, печать на одежде цена, печать бирок на одежду"
                image="/images/contact-og.jpg"
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
