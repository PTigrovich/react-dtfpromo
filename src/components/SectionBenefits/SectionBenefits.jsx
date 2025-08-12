import styles from './SectionBenefits.module.scss';
import CardBenefits from '../CardBenefits/CardBenefits';
import { benefits } from '../../data/data';

function SectionBenefits() {
    return (
        <div className={styles.benefitsBlock}>
            {benefits.map(benefits => (
                <CardBenefits key={benefits.id} img={benefits.imageUrl} name={benefits.name} text={benefits.description} />
            ))}
        </div>
    );
}
export default SectionBenefits;
