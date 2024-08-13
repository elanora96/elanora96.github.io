import type { FC } from 'react';
import { repository } from '../../../package.json';

const Navbar: FC = () => {
  const [repoUrl] = repository.url.match(/https?:\/\/[^\s]+/) || [''];
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <span>
        <h3>
          <a style={{ textDecoration: 'none', color: 'white' }} href="/">
            elanora.lol
          </a>
        </h3>
      </span>
      <span>
        <a href="/">Home</a> <a href="/resume">Resume</a>{' '}
        <a href={repoUrl}>Source</a>
      </span>
    </div>
  );
};

export default Navbar;
