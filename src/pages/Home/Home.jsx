import styles from './Home.module.scss';
import ButtonQuote from '../../components/ButtonQuote/ButtonQuote';
import Layout from '../../components/Layout/Layout';
import SectionBenefits from '../../components/SectionBenefits/SectionBenefits';
import SectionPriority from '../../components/SectionPriority/SectionPriority';

function Home() {

    return (
        <Layout>
            <h2 className={styles.home__title}>Профессиональная Прямая DTF-печать на текстиль</h2>
            <ButtonQuote className={styles.home__buttonQuote}>
                Запросить <br /> коммерческое предложение
            </ButtonQuote>
            <SectionBenefits />
            <h3 className={styles.home__subtitle}>Наш приоритет - Ваша выгода!</h3>
            <SectionPriority />
        </Layout>
    );
}

export default Home;
