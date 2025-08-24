import styles from './SectionDTFAbout.module.scss';

function SectionDTFAbout() {
    return (
        <section className={styles.wrapper}>
            <h2 className={styles.lead}>
                Наша компания оснащена современным оборудованием AUDLEY (комплекс с 4 печатающими головами), что обеспечивает стабильное качество и высокую
                скорость. Печатаем экологичными чернилами на водной основе (CMYK+White) по PET‑плёнке.
            </h2>

            <div className={styles.hero}>
                <img src={process.env.PUBLIC_URL + '/images/equipment.PNG'} alt="Оборудование DTF" />
            </div>

            <div className={styles.grid}>
                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Что такое DTF‑печать</h3>
                    <p className={styles.text}>
                        DTF (Direct‑to‑Film) — современный способ переноса изображений на изделия из хлопка, смесовых и синтетических тканей. Изображение
                        печатается на специальной плёнке, после чего переносится на ткань при помощи термопресса под температурой и давлением. Результат —
                        яркие, стойкие и детализированные отпечатки, устойчивые к стирке, механическим воздействиям и УФ.
                    </p>
                </div>

                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Когда это выгодно</h3>
                    <p className={styles.text}>
                        Технология подходит как для единичных заказов, так и для крупных тиражей. Мы быстро выполняем заказы и бережно сохраняем детали дизайна
                        — мелкий текст, градиенты и полутоновые переходы.
                    </p>
                </div>

                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Дизайн и подготовка</h3>
                    <p className={styles.text}>
                        Если у вас нет готового макета — дизайнеры помогут оперативно подготовить файл с учётом материала, цвета изделия и особенностей печати,
                        чтобы вы быстрее получили нужный тираж.
                    </p>
                </div>
            </div>

            {/* <div className={styles.gallery}>
                <img src={process.env.PUBLIC_URL + '/images/item1.png'} alt="Пример печати 1" />
                <img src={process.env.PUBLIC_URL + '/images/item2.png'} alt="Пример печати 2" />
                <img src={process.env.PUBLIC_URL + '/images/item3.png'} alt="Пример печати 3" />
                <img src={process.env.PUBLIC_URL + '/images/item4.png'} alt="Пример печати 4" />
                <img src={process.env.PUBLIC_URL + '/images/item5.png'} alt="Пример печати 5" />
            </div> */}

            <div className={styles.note}>Работаем официально, с договором и безналичным расчётом с НДС 20%.</div>
        </section>
    );
}

export default SectionDTFAbout;
