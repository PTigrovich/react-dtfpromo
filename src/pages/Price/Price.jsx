import styles from './Price.module.scss';
import { useEffect } from 'react';
import SeoMetaTags from '../../components/SeoMetaTags';
import TablePrice from '../../components/TablePrice/TablePrice';
import ItemExample from '../../components/ItemExample/ItemExample';

function Price() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <SeoMetaTags
                title="DTF Promo Цены"
                description="Быстрая доставка DTF по России. Удобные способы оплаты. заказать дтф, дтф на одежде, печать дтф наклеек, сублимация дтф, дтф картинки, дтф принтер для футболок, стикеры дтф, печать на одежде дтф, дтф на заказ, дтф наклейки заказать, дтф печать на заказ, заказать мерч, мерч москва"
                keywords="доставка 3D печать, стоимость доставки, оплата"
                image="/images/price-og.jpg"
                url="/price"
            />
            <div className={styles.content}>
                <TablePrice />

                {/* Первый блок ItemExample */}
                <div className={styles.itemBlock}>
                    <ItemExample title="Перед" imageUrl="/images/example1.jpg" altText="Пример готовой DTF продукции" />
                </div>

                {/* Второй блок ItemExample */}
                <div className={styles.itemBlock}>
                    <ItemExample title="Спина" imageUrl="/images/example2.jpg" altText="Качественная DTF печать на заказ" />
                </div>

                {/* Предупреждающий текст */}
                <div className={styles.warningText}>
                    <p>
                        <strong>Внимание! Данный макет-визуализация является примерным!</strong>
                        <br />
                        Заказ будет напечатан в соответствии с техническим заданием в бланке заказа (договоре)
                        <br />
                        Внимательно проверяйте заказ!
                    </p>
                </div>
            </div>
        </>
    );
}
export default Price;
