import styles from './FormBackCall.module.scss';
import ButtonForm from '../../components/ButtonForm/ButtonForm';
import { useState } from 'react';

function FormBackCall({ onClose }) {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData(e.target);

        try {
            await fetch('https://formsubmit.co/info@dtf.promo', {
                method: 'POST',
                body: formData,
            });

            // Закрываем модальное окно после успешной отправки
            if (onClose) {
                onClose();
            }

            // Очищаем форму
            e.target.reset();

            // Можно показать alert или уведомление
            alert('Спасибо! Ваша заявка отправлена.');
        } catch (error) {
            console.error('Ошибка отправки:', error);
            alert('Произошла ошибка при отправке. Попробуйте еще раз.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form className={styles.form}  onSubmit={handleSubmit}>
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

            <ButtonForm type="submit" className={styles.form__button} disabled={isLoading}>
                {isLoading ? 'Отправка...' : 'Отправить'}
            </ButtonForm>
        </form>
    );
}
export default FormBackCall;
