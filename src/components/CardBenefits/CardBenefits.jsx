import styles from './CardBenefits.module.scss';

function CardBenefits({ img, text, name }) {
    return (
        <div className={styles.itemCard}>
            <div className={styles.imageWrapper}>
                <img
                    src={process.env.PUBLIC_URL + img}
                    alt={name}
                    className={styles.productImage}
                    onError={e => {
                        e.target.src = process.env.PUBLIC_URL + '/images/placeholder.jpg';
                    }}
                />
            </div>
            <div className={styles.textContainer}>
                <h3 className={styles.productName}>{name}</h3>
                <p className={styles.productDescription}>{text}</p>
            </div>
        </div>
    );
}

export default CardBenefits;
