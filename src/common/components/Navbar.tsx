import RouteManager from '@services/route-manager';
import type { FC } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { repository } from '../../../package.json';
import styles from './Navbar.module.css';

interface NavbarProps {
  siteName?: string;
  repoUrl?: string;
}

const Navbar: FC<NavbarProps> = ({
  siteName = 'elanora.lol',
  repoUrl = (/https?:\/\/[^\s]+/.exec(repository.url) ?? [''])[0],
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);

  const handleClose = () => {
    setMenuClosing(true);
    setTimeout(() => {
      setMenuClosing(false);
      setMenuOpen(false);
    }, 300);
  };

  return (
    <div className={styles.Navbar}>
      <span className={styles.NavlogoContainer}>
        <span className={styles.menu}>
          <button
            onClick={() => {
              if (menuOpen) {
                handleClose();
              } else {
                setMenuOpen(true);
              }
            }}
          >
            ☰
          </button>
        </span>
        <Link className={styles.Navlogo} to={RouteManager.makeURL('home')}>
          {siteName}
        </Link>
      </span>
      <span
        className={[
          styles.Navlinks,
          menuOpen ? styles.open : '',
          menuClosing ? styles.closing : '',
        ].join(' ')}
        onClick={({ target }) => {
          if (menuOpen) {
            const el = target as HTMLElement;
            if (el.tagName === 'A') handleClose();
          }
        }}
      >
        <Link to={RouteManager.makeURL('home')}>Home</Link>{' '}
        <Link to={RouteManager.makeURL('resume')}>Resume</Link>{' '}
        {repoUrl ? <a href={repoUrl}>Source</a> : ''}
      </span>
    </div>
  );
};

export default Navbar;
