import styles from './ButtonQuote.module.scss';
import { useState } from 'react';
import FormBackCall from '../FormBackCall/FormBackCall'


const ButtonQuote = ({ className, children }) => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    return (
        <>
            {/* Кнопка с вашими стилями */}
            <button className={`${styles.button__quote} ${className}`} onClick={() => setIsFormOpen(true)}>
                {children}
            </button>

            {/* Модальное окно с формой */}
            {isFormOpen && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <button className={styles.modalClose} onClick={() => setIsFormOpen(false)}>
                            ×
                        </button>
                        <FormBackCall />
                    </div>
                </div>
            )}
        </>
    );
};

export default ButtonQuote;
