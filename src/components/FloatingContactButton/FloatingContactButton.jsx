import { useState, useEffect } from 'react';
import styles from './FloatingContactButton.module.scss';
import FormBackCall from '../FormBackCall/FormBackCall'; // твоя форма

import { FaTelegramPlane } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

export default function FloatingContactButton() {
    const icons = [
        { component: <FaTelegramPlane color="#0088cc" />, name: 'Telegram' },
        { component: <FaWhatsapp color="#25d366" />, name: 'WhatsApp' },
    ];

    const [currentIconIndex, setCurrentIconIndex] = useState(0);
    const [showForm, setShowForm] = useState(false);

    // Сброс индекса если он больше длины массива
    useEffect(() => {
        if (currentIconIndex >= icons.length) {
            setCurrentIconIndex(0);
        }
    }, [currentIconIndex, icons.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIconIndex(prev => (prev + 1) % icons.length);
        }, 3000); // смена каждые 3 сек
        return () => clearInterval(interval);
    }, [icons.length]);

    return (
        <>
            {/* Плавающая кнопка */}
            <div className={styles.floatingButton} onClick={() => setShowForm(true)}>
                <span className={styles.icon}>{icons[currentIconIndex]?.component || icons[0].component}</span>
            </div>

            {/* Модалка с формой */}
            {showForm && (
                <div className={styles.modalOverlay} onClick={() => setShowForm(false)}>
                    <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                        <FormBackCall />
                        <button className={styles.closeButton} onClick={() => setShowForm(false)}>
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
