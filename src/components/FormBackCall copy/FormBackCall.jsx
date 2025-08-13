import styles from './FormBackCall.module.scss';
import ButtonForm from '../ButtonForm/ButtonForm';

function FormBackCall() {
    return (
        <form className={styles.form}>
            <div className={styles.form__section}>
                <label className={styles.form__label}>Имя</label>
                <input type="text" className={styles.form__input} placeholder="Ваше имя" />
            </div>

            <div className={styles.form__section}>
                <label className={styles.form__label}>Номер</label>
                <input type="email" className={styles.form__input} placeholder="Ваш номер" />
            </div>
            <div className={styles.form__section}>
                <label className={styles.form__label}>Почта</label>
                <input type="email" className={styles.form__input} placeholder="Ваша почта" />
            </div>

            <div className={styles.form__section}>
                <label className={styles.form__label}>Сообщение</label>
                <textarea className={`${styles.form__input} ${styles.form__textarea}`} placeholder="Ваше сообщение" />
            </div>
            <ButtonForm className={styles.form__button}> Отправить </ButtonForm>
        </form>
    );
}
export default FormBackCall;
