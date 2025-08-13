import styles from './DeliveryBlock.module.scss';

function DeliveryBlock({title, className, content}) {
    return (
        <div className={`${styles.content} ${className}`}>
            <h4 className={styles.content__title}>{title}</h4>
            <div className={styles.content__description}>
					{content}
				</div>
        </div>
    );
}

export default DeliveryBlock;
