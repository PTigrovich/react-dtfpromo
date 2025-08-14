import styles from './Delivery.module.scss';

import DeliveryBlock from '../../components/DeliveryBlock/DeliveryBlock';

function About() {
    return (
        
            <div className={styles.content}>
                <div className={styles.wrapper__bigWrapper}>
                    <DeliveryBlock className={styles.bigWrapper__block} title={'Способ доставки'}>
                        <div className={styles.pricing}>
                            <div className={styles.pricing__row}>
                                <span className={styles.pricing__title}>Стандартная</span>
                                <span className={styles.pricing__price}>15$</span>
                            </div>
                            <div className={styles.pricing__row}>
                                <span className={styles.pricing__title}>Ускоренная</span>
                                <span className={styles.pricing__price}>20$</span>
                            </div>
                            <div className={styles.pricing__row}>
                                <span className={styles.pricing__title}>Экспресс</span>
                                <span className={styles.pricing__price}>25$</span>
                            </div>
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
                                Мы гарантируем своевременную доставку для всех заказов, оформленных до 15:00. Стандартная доставка занимает 5–7 рабочих дней,
                                ускоренная 3-5 дней, экспресс-доставка — 2–3 дня.
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
                                    «Кустарное» DTF-изготовление – высокий брак, заломы изображения и низкая износостойкость Такой продукт проигрывает по всем
                                    этим параметрам
                                </p>
                            </div>
                        </div>
                    </DeliveryBlock>
                </div>
                <DeliveryBlock className={styles.wrapper__smallWrapper} title={'Наши Контакты'}>
                    <p>
                        Для получения дополнительной помощи обращайтесь в нашу службу поддержки клиентов по адресу support@dtf.promo или звоните нам по телефону
                        +7 (800) 123-45-67.
                    </p>
                </DeliveryBlock>
            </div>
       
    );
}
export default About;
