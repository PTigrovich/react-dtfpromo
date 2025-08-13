import styles from './ButtonQuote.module.scss';




const ButtonQuote = ({ className, children }) => {
	
    return (
        <button className={`${styles.button__quote} ${className}`}>
            {children}
        </button>
    );
};

export default ButtonQuote;
