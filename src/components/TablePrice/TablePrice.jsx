import styles from './TablePrice.module.scss';

function TablePrice() {
    const priceData = [
        { format: 'Mini', size: '8×8см', prices: [400, 259, 215, 165, 130, 115, 100] },
        { format: 'А6', size: '10×15см', prices: [480, 300, 250, 200, 160, 140, 120] },
        { format: 'А5', size: '15×20см', prices: [580, 450, 399, 360, 240, 200, 190] },
        { format: 'А4', size: '20×30см', prices: [680, 560, 499, 460, 330, 290, 280] },
        { format: 'А3', size: '30×42см', prices: [780, 660, 599, 570, 520, 490, 470] },
        { format: 'А3+', size: '40×42см', prices: [880, 760, 699, 660, 600, 580, 560] },
        { format: 'А2', size: '40×53см', prices: [1300, 1100, 999, 860, 700, 680, 659] },
    ];

    const priceLabels = ['1 шт.', '5 шт.', '10 шт.', '15 шт.', '20 шт.', '35 шт.', '50 шт.'];

    return (
        <div className={styles.tablePrice}>
            {/* Табличное отображение */}
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Формат</th>
                        <th>
                            <span className={styles.headerText}>1 шт.</span>
                        </th>
                        <th>
                            <span className={styles.headerText}>5 шт.</span>
                        </th>
                        <th>
                            <span className={styles.headerText}>10 шт.</span>
                        </th>
                        <th>
                            <span className={styles.headerText}>15 шт.</span>
                        </th>
                        <th>
                            <span className={styles.headerText}>20 шт.</span>
                        </th>
                        <th>
                            <span className={styles.headerText}>35 шт.</span>
                        </th>
                        <th>
                            <span className={styles.headerText}>50 шт.</span>
                        </th>
                        <th>
                            <span className={styles.headerText}>
                                от 50 шт.
                                <br />
                                до 10000
                            </span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {priceData.map((item, index) => (
                        <tr key={index}>
                            <td className={styles.format}>
                                {item.format} ({item.size})
                            </td>
                            {item.prices.map((price, priceIndex) => (
                                <td key={priceIndex}>{price} р.</td>
                            ))}
                            <td className={styles.individual}>Индивидуальный расчёт</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Карточное отображение для мобильных */}
            <div className={styles.cardView}>
                {priceData.map((item, index) => (
                    <div key={index} className={styles.priceCard}>
                        <div className={styles.cardHeader}>
                            <div className={styles.cardTitle}>{item.format}</div>
                            <div className={styles.cardSize}>{item.size}</div>
                        </div>
                        <div className={styles.priceGrid}>
                            {item.prices.map((price, priceIndex) => (
                                <div key={priceIndex} className={styles.priceItem}>
                                    <span className={styles.priceLabel}>{priceLabels[priceIndex]}</span>
                                    <span className={styles.priceValue}>{price} р.</span>
                                </div>
                            ))}
                            <div className={styles.individualPrice}>
                                <span className={styles.priceLabel}>от 50 шт. до 10000</span>
                                <span className={styles.priceValue}>Индивидуальный расчёт</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TablePrice;
