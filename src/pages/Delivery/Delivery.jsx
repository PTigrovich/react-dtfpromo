
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
                    <DeliveryBlock className={styles.bigWrapper__block} title={'Процесс логистики'} />
                </div>
                <div className={styles.wrapper__middleWrapper}>
                    <DeliveryBlock className={styles.middleWrapper__block} title={'Гарантия доставки'} />
                    <DeliveryBlock className={styles.middleWrapper__block} title={'Часто уточняют'} />
                </div>
                <DeliveryBlock className={styles.wrapper__smallWrapper} title={'Наши Контакты'} />
            </div>
        </Layout>
    );
}
export default About;

