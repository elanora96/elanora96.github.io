import { FC } from 'react';
import styles from './Footer.module.css';

const Footer: FC = () => {
  return (
    <footer className={styles.Footer}>
      &copy; Elanora Manson 2023<strong> - &infin;</strong>
    </footer>
  );
};

export default Footer;
