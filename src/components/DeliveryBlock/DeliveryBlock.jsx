import styles from './DeliveryBlock.module.scss';

function DeliveryBlock({title, className, children}) {
    return (
        <div className={`${styles.content} ${className}`}>
            <h4 className={styles.content__title}>{title}</h4>
            <div className={styles.content__description}>{children}</div>
        </div>
    );
}

export default DeliveryBlock;
