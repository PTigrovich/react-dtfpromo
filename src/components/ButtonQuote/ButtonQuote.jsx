import styles from './ButtonQuote.module.scss';




const ButtonQuote = ({ className }) => {
    return (
        <button className={`${styles.button__quote} ${className}`}>
            Запросить <br /> коммерческое предложение
        </button>
    );
};

export default ButtonQuote;
