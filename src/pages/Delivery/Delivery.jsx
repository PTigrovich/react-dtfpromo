import styles from './Delivery.module.scss';
import { useEffect } from 'react'; 
import DeliveryBlock from '../../components/DeliveryBlock/DeliveryBlock';

function About() {
	useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={styles.content}>
            <div className={styles.wrapper__bigWrapper}>
                <DeliveryBlock className={styles.bigWrapper__block} title={'Способ доставки'}>
                    <div className={styles.pricing}>
                        <div className={styles.pricing__row}>
                            <span className={styles.pricing__title}>Самовывоз</span>
                            <span className={styles.pricing__price}>0р</span>
                        </div>
                        <p className={styles.pricing__description}>Адрес: Московская область, г.о. Химки, мкр. Сходня.</p>
                        <div className={styles.pricing__row}>
                            <span className={styles.pricing__title}>Доставка по Москве</span>
                            <span className={styles.pricing__price}>от 1000р</span>
                        </div>
                        <p className={styles.pricing__description}>
                            {`Собственный транспорт компании / Яндекс доставка: от 1.000 р.
                              При заказе от 100.000 р доставка по Москве бесплатно.`}
                        </p>
                        <div className={styles.pricing__row}>
                            <span className={styles.pricing__title}>Регионы</span>
                        </div>
                        <p className={styles.pricing__description}>Доставка до склада любой ТК бесплатно</p>
                    </div>
                </DeliveryBlock>
                
            </div>
            
            <DeliveryBlock className={styles.wrapper__smallWrapper} title={'Наши Контакты'}>
                <p>
                    Для получения дополнительной помощи обращайтесь в нашу службу поддержки клиентов по адресу info@dtf.promo или звоните нам по телефону
                    +7(495)204-3904.
                </p>
            </DeliveryBlock>
        </div>
    );
}
export default About;
