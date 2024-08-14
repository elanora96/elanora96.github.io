import RouteManager from '@services/route-manager';
import type { FC } from 'react';
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
  return (
    <div className={styles.Navbar}>
      <span>
        <Link className={styles.Navlogo} to={RouteManager.makeURL('home')}>
          {siteName}
        </Link>
      </span>
      <span className={styles.Navlinks}>
        <Link to={RouteManager.makeURL('home')}>Home</Link>{' '}
        <Link to={RouteManager.makeURL('resume')}>Resume</Link>{' '}
        {repoUrl ? <a href={repoUrl}>Source</a> : ''}
      </span>
    </div>
  );
};

export default Navbar;
