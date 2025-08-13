import styles from './ButtonForm.module.scss';




const ButtonForm = ({ className, children }) => {
    return <button className={`${styles.button__quote} ${className}`}>{children}</button>;
};

export default ButtonForm;
