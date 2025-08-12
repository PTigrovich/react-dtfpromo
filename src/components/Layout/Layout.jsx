import styles from './Layout.module.scss';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';


const Layout = ({ children }) => {
  return (
      <div className={styles.layout}>
          <Header className={styles.header} />
          <main className={styles.content}>{children}</main> {/* Вот это было пропущено! */}
          <Footer className={styles.footer} />
      </div>
  );
};

export default Layout;

