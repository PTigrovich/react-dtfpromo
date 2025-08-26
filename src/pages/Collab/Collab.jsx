import { useEffect } from 'react';
import styles from './Collab.module.scss'; // Создайте этот файл стилей
import SeoMetaTags from '../../components/SeoMetaTags';


function Collab() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <SeoMetaTags
                title="Доставка и оплата - RiteC"
                description="Быстрая доставка 3D моделей по России. Удобные способы оплаты."
                keywords="доставка 3D печать, стоимость доставки, оплата"
                image="/images/delivery-og.jpg"
                url="/collab"
            />

            <div className={styles.collabContainer}>
                <h1 className={styles.mainTitle}>Сотрудничество</h1>

                <div className={styles.cardsWrapper}>
                    <div className={styles.itemCard}>
                        <div className={styles.textContainer}>
                            <h3 className={styles.productName}>Дизайн</h3>
                            <p className={styles.productDescription}>
                                Если вы дизайнер, креативны, понимаете современные тренды в принтах на одежде, имеете собственное понимание того, что именно
                                сейчас необходимо покупателям – присылайте ваши идеи/макеты, портрет потенциального покупателя, предполагаемые размеры. Мы
                                изучим перспективность, наши технологи адаптируют ваши идеи в готовые макеты, производство выпустит пилотную партию для
                                реализации на маркетплейсах в наших магазинах. В случае коммерческого успеха пилота, мы заключим с вами договор на авторские
                                права с выплатой дохода с каждого проданного изделия.
                            </p>
                            <div className={styles.imageWrapper}>
                                <img
                                    src={process.env.PUBLIC_URL + '/images/collab-design.PNG'}
                                    alt="Дизайн сотрудничество"
                                    className={styles.productImage}
                                    onError={e => {
                                        e.target.src = process.env.PUBLIC_URL + '/images/placeholder.jpg';
                                    }}
                                />
                            </div>
                            <p className={styles.contactEmail}>
                                Ждем ваших предложений на <strong>idea@dtf.promo</strong>
                            </p>
                        </div>
                    </div>

                    <div className={styles.itemCard}>
                        <div className={styles.textContainer}>
                            <h3 className={styles.productName}>Производство</h3>
                            <p className={styles.productDescription}>
                                Вам интересна тема принтованной одежды? Хотите иметь своё производство, но нет возможности купить высококачественное современное
                                печатное оборудование? Вам достаточно приобрести недорогой термопресс на 1 рабочий стол. Мы же произведем для вас
                                высококачественные DTF трансферы и отправим в надежных прочных тубах в любую точку мира. Вам достаточно будет перенести
                                изображения на ваши текстильные изделия, упаковать и передать вашему покупателю. Что делать, кому продавать и по какой цене
                                определяете вы сами.
                            </p>
                            <div className={styles.imageWrapper}>
                                <img
                                    src={process.env.PUBLIC_URL + '/images/collab-production.PNG'}
                                    alt="Производство сотрудничество"
                                    className={styles.productImage}
                                    onError={e => {
                                        e.target.src = process.env.PUBLIC_URL + '/images/placeholder.jpg';
                                    }}
                                />
                            </div>
                            <p className={styles.contactEmail}>
                                Ждем ваших предложений на <strong>partner@dtf.promo</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Collab;
