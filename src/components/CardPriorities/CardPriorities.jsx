import styles from './CardPriorities.module.scss';

function CardPriorities({ text, name }) {
    return (
        
            <div className={styles.textContainer}>
                <h3 className={styles.productName}>{name}</h3>
                <p className={styles.productDescription}>{text}</p>
            </div>
        
    );
}

export default CardPriorities;
