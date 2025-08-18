import styles from './Home.module.scss';
import ButtonQuote from '../../components/ButtonQuote/ButtonQuote';
import { useEffect } from 'react'; 
import SectionBenefits from '../../components/SectionBenefits/SectionBenefits';
import SectionPriority from '../../components/SectionPriority/SectionPriority';

function Home() {
	 useEffect(() => {
         window.scrollTo(0, 0);
     }, []);

    return (
        <>
            <h2 className={styles.home__title}>Широкоформатная DTF печать. Собственное производство, без посредников.</h2>
            <ButtonQuote className={styles.home__buttonQuote}>
                Рассчитать  стоимость заказа
            </ButtonQuote>
            <SectionBenefits />
            <h3 className={styles.home__subtitle}>Наш приоритет - Ваша выгода!</h3>
            <SectionPriority />
        </>
    );
}

export default Home;
