import styles from './Home.module.scss';
import ButtonQuote from '../../components/ButtonQuote/ButtonQuote';
import { useEffect } from 'react'; 
import SectionBenefits from '../../components/SectionBenefits/SectionBenefits';
import SectionPriority from '../../components/SectionPriority/SectionPriority';
import CardBenefits from '../../components/CardBenefits/CardBenefits';
import Catalog from '../../components/Catalog/Catalog';

function Home() {
	 useEffect(() => {
         window.scrollTo(0, 0);
     }, []);

    return (
        <>
            <h1 className={styles.home__title}>Широкоформатная DTF печать. Собственное производство, без посредников.</h1>
            
            <SectionBenefits />
            <Catalog />
            <h2 className={styles.home__subtitle}>Наш приоритет - Ваша выгода!</h2>
            <SectionPriority />
            <ButtonQuote className={styles.home__buttonQuote}>Рассчитать стоимость заказа</ButtonQuote>
        </>
    );
}

export default Home;
