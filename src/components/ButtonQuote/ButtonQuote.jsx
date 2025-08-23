import styles from './ButtonQuote.module.scss';
import { useState } from 'react';
import FormBackCall from '../FormBackCall/FormBackCall'


const ButtonQuote = ({ className, children }) => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    
    return (
        <>
            <button className={`${styles.button__quote} ${className}`} onClick={() => setIsFormOpen(true)}>
                {children}
            </button>

            {isFormOpen && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <button className={styles.modalClose} onClick={() => setIsFormOpen(false)}>
                            ×
                        </button>
                        {/* Передаем функцию закрытия в форму */}
                        <FormBackCall onClose={() => setIsFormOpen(false)} />
                    </div>
                </div>
            )}
        </>
    );
};

export default ButtonQuote;


