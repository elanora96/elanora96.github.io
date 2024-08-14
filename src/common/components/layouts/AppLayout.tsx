import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './AppLayout.module.css';

const AppLayout: FC = () => {
  return (
    <>
      <Navbar />
      <main className={styles.Out}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
