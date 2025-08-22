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
                <DeliveryBlock className={styles.bigWrapper__block} title={'Процесс логистики'}>
                    <div className={styles.logistic}>
                        <p>
                            Наш логистический процесс гарантирует своевременную доставку благодаря отлаженной системе, включающей оперативную автоматическую
                            обработку заказов, отслеживание в режиме реального времени и эффективные каналы дистрибуции. Мы сотрудничаем с проверенными
                            перевозчиками, чтобы предлагать надёжные услуги.
                        </p>
                        <div className={styles.logistic__imageWrapper}>
                            <img src="/images/logistic.png" alt="logistic" className={styles.logisticImage} />
                        </div>
                    </div>
                </DeliveryBlock>
            </div>
            <div className={styles.wrapper__middleWrapper}>
                <DeliveryBlock className={styles.middleWrapper__block} title={'Гарантия доставки'}>
                    <div className={styles.garanty}>
                        <p>
                            Мы гарантируем своевременную доставку для всех заказов, оформленных до 15:00. 
                        </p>
                    </div>
                </DeliveryBlock>
                <DeliveryBlock className={styles.middleWrapper__block} title={'Вопросы'}>
                    <div className={styles.question}>
                        {/* Блок 1 */}
                        <div className={styles.block}>
                            <p className={styles.question}>Если есть вопросы</p>
                            <p className={styles.answer}>
                                Отправляйте форму или свяжитесь с нами любым удобным способом, наши представители проконсультируют Вас по всем нюансам
                                продукта-оплаты-доставки.
                            </p>
                        </div>

                        {/* Блок 2 */}
                        <div className={styles.block}>
                            <p className={styles.question}>Чем профессиональные DTF-принтеры превосходят кустарные</p>
                            <p className={styles.answer}>
                                «Кустарное» DTF-изготовление – высокий брак, заломы изображения и низкая износостойкость Такой продукт проигрывает по всем этим
                                параметрам
                            </p>
                        </div>
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
