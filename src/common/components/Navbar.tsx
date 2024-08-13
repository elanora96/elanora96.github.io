import type { FC } from 'react';
import { repository } from '../../../package.json';
import RouteManager from '@services/route-manager';
import { Link, Outlet } from 'react-router-dom';

const Navbar: FC = () => {
  const [repoUrl] = repository.url.match(/https?:\/\/[^\s]+/) || [''];
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>
          <h3>
            <Link
              style={{ textDecoration: 'none', color: 'white' }}
              to={RouteManager.makeURL('home')}
            >
              elanora.lol
            </Link>
          </h3>
        </span>
        <span>
          <Link to={RouteManager.makeURL('home')}>Home</Link>{' '}
          <Link to={RouteManager.makeURL('resume')}>Resume</Link>{' '}
          <a href={repoUrl}>Source</a>
        </span>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
