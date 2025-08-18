import styles from './Catalog.module.scss';
import {catalogItems } from '../../data/data'



function Catalog() {
    return (
        <div className={styles.wrapper}>
            {catalogItems.map(item => (
                <div key={item.id} className={styles.itemCard}>
                    <div className={styles.imageWrapper}>
                        <img
                            src={process.env.PUBLIC_URL + item.img}
                            alt={item.name}
                            className={styles.productImage}
                            onError={e => {
                                e.target.src = process.env.PUBLIC_URL + '/images/placeholder.jpg';
                            }}
                        />
                    </div>
                    <div className={styles.textContainer}>
                        <h5 className={styles.productName}>{item.name}</h5>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Catalog;

