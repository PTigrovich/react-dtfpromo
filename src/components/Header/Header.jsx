
import styles from './Header.module.scss';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';


function Header() {
  

    return (
        <div className={styles.header}>
            <header className={styles.header__container}>
                <Logo />
                <Nav />
            </header>
        </div>
    );
}

export default Header;
