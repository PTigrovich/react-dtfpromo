import styles from './Layout.module.scss';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import FloatingContactButton from '../FloatingContactButton/FloatingContactButton';
import { Outlet } from 'react-router-dom'; 
import YandexMetrika from '../YandexMetrika/YandexMetrika'; // ← Добавьте эту строку


const Layout = () => {
  return (
      <div className={styles.layout}>
          <YandexMetrika />
          <Header className={styles.header} />
          <main className={styles.content}>
              <Outlet />
          </main>
          {/* Вот это было пропущено! */}
          <Footer className={styles.footer} />
          <FloatingContactButton />
      </div>
  );
};

export default Layout;

