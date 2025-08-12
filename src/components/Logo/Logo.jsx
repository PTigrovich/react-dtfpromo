import styles from './Logo.module.scss';

import { ReactComponent as LogoIcon } from '../../assets/images/logo-test-icon.svg';


const Logo = () => {

    return (
        <div className={styles.logo}>
            <LogoIcon
                className={styles.logo__icon}
                style={{ width: '40px', height: '40px', fill: 'white' }} // Контроль размера
            />
            <h1 className={styles.logo__name}>DTF Promo</h1>
        </div>
    );
};

export default Logo;
