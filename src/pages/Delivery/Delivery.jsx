import styles from './Delivery.module.scss';
import Layout from '../../components/Layout/Layout';
import DeliveryBlock from '../../components/DeliveryBlock/DeliveryBlock';

function About() {
    return (
        <Layout>
            <div className={styles.content}>
                <div className={styles.wrapper__bigWrapper}>
                    <DeliveryBlock className={styles.bigWrapper__block} title={'Способ доставки'}>
                        <div className={styles.pricing}>
                            <div className={styles.pricing__row}>
                                <span className={styles.pricing__title}>Базовая</span>
                                <span className={styles.pricing__price}>15$</span>
                            </div>
                            <div className={styles.pricing__row}>
                                <span className={styles.pricing__title}>Ускоренная</span>
                                <span className={styles.pricing__price}>20$</span>
                            </div>
                            <div className={styles.pricing__row}>
                                <span className={styles.pricing__title}>Быстрая</span>
                                <span className={styles.pricing__price}>25$</span>
                            </div>
                        </div>
                    </DeliveryBlock>
                    <DeliveryBlock className={styles.bigWrapper__block} title={'Процесс логистики'}>
                        <div className={styles.logistic}>
                            <p>
                                Наш логистический процесс гарантирует своевременную доставку благодаря отлаженной системе, включающей автоматическую обработку
                                заказов, отслеживание в режиме реального времени и эффективные каналы дистрибуции. Мы сотрудничаем с проверенными перевозчиками,
                                чтобы предлагать надёжные услуги.
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
                                экспресс-доставка — 2–3 дня, а доставка на следующий рабочий день.
                            </p>
                        </div>
                    </DeliveryBlock>
                    <DeliveryBlock className={styles.middleWrapper__block} title={'Часто спрашивают'}>
                        <div className={styles.question}>
                            {/* Блок 1 */}
                            <div className={styles.block}>
                                <p className={styles.question}>Вопрос 1</p>
                                <p className={styles.answer}>Ответ на первый вопрос</p>
                            </div>

                            {/* Блок 2 */}
                            <div className={styles.block}>
                                <p className={styles.question}>Вопрос 2</p>
                                <p className={styles.answer}>Ответ на второй вопрос</p>
                            </div>

                            {/* Блок 3 */}
                            <div className={styles.block}>
                                <p className={styles.question}>Вопрос 3</p>
                                <p className={styles.answer}>Ответ на третий вопрос</p>
                            </div>
                        </div>
                    </DeliveryBlock>
                </div>
                <DeliveryBlock className={styles.wrapper__smallWrapper} title={'Наши Контакты'}>
                    <p >
                        Для получения дополнительной помощи обращайтесь в нашу службу поддержки клиентов по адресу support@dtfdirect.com или звоните нам по
                        телефону (123) 456-7890.
                    </p>
                </DeliveryBlock>
            </div>
        </Layout>
    );
}
export default About;
