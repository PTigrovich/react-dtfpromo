import styles from './SectionPriority.module.scss';
import CardPriorities from '../CardPriorities/CardPriorities';
import { priorities } from '../../data/data';

function SectionPriority() {
    return (
        <div className={styles.prioritiesBlock}>
            {priorities.map(priorities => (
                <CardPriorities key={priorities.id} name={priorities.name} text={priorities.description} />
            ))}
        </div>
    );
}
export default SectionPriority;
