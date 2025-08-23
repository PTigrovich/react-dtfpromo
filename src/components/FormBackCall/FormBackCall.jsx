import styles from './FormBackCall.module.scss';
import ButtonForm from '../../components/ButtonForm/ButtonForm';

function FormBackCall() {
    return (
        <form className={styles.form} action="https://formsubmit.co/info@dtf.promo" method="POST">
            {/* Добавьте скрытое поле для темы письма */}
            <input type="hidden" name="_subject" value="Новая заявка с сайта dtf.promo!" />

            {/* Добавьте скрытое поле для отключения капчи */}
            <input type="hidden" name="_captcha" value="false" />

            

            <div className={styles.form__section}>
                <label className={styles.form__label}>Имя</label>
                <input
                    type="text"
                    name="name" // Добавьте name атрибут
                    className={styles.form__input}
                    placeholder="Ваше имя"
                    required
                />
            </div>

            <div className={styles.form__section}>
                <label className={styles.form__label}>Номер</label>
                <input
                    type="tel" // Измените на tel для телефона
                    name="phone"
                    className={styles.form__input}
                    placeholder="Ваш номер"
                    required
                />
            </div>

            <div className={styles.form__section}>
                <label className={styles.form__label}>Почта</label>
                <input type="email" name="email" className={styles.form__input} placeholder="Ваша почта" required />
            </div>

            <div className={styles.form__section}>
                <label className={styles.form__label}>Сообщение</label>
                <textarea name="message" className={`${styles.form__input} ${styles.form__textarea}`} placeholder="Ваше сообщение" required />
            </div>

            <ButtonForm
                type="submit" // Добавьте type="submit"
                className={styles.form__button}
            >
                Отправить
            </ButtonForm>
        </form>
    );
}
export default FormBackCall;
