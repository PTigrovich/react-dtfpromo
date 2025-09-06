import React from 'react';
import styles from './ItemExample.module.scss';

function ItemExample({ title, imageUrl, altText }) {
    return (
        <div className={styles.itemExample}>
            <h2 className={styles.itemTitle}>{title}</h2>
            <img src={imageUrl} alt={altText} className={styles.itemImage} />
        </div>
    );
}

export default ItemExample;
