import type { FCCRoute } from '@lomray/vite-ssr-boost/interfaces/fc-route';
import RouteManager from '@services/route-manager';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const Intro: FC = () => {
  return (
    <div className={styles.Intro}>
      <div className={styles.IntroImg}>👩‍💻</div>
      <div className={styles.IntroText}>
        <p>
          Hello, I guess this is where I write about myself. Hopefully this
          placeholder text is not here long...
        </p>
        <p>(Or this placeholder emoji)</p>
        <p>But honestly it is more fun to write code than about myself</p>
      </div>
    </div>
  );
};

interface liink {
  url: 'home' | 'resume' | 'originalHome';
  label: string;
}

interface SiteMapProps {
  active: liink[];
  archive: liink[];
}

const SiteMap: FC<SiteMapProps> = (props) => {
  return (
    <div className={styles.Sitemap}>
      <h2>Sitemap: </h2>
      <h3>Active: </h3>
      {Object.values(props.active).map(({ url, label }) => (
        <Link
          className={url === 'home' ? styles.Here : ''}
          key={url}
          to={RouteManager.makeURL(url)}
        >
          {label}
        </Link>
      ))}
      <h3>Archive: </h3>
      {Object.values(props.archive).map(({ url, label }) => (
        <Link key={url} to={RouteManager.makeURL(url)}>
          {label}
        </Link>
      ))}
    </div>
  );
};

const Home: FCCRoute = () => {
  const routes: SiteMapProps = {
    active: [
      { url: 'home', label: 'Home' },
      { url: 'resume', label: 'Resume' },
    ],
    archive: [{ url: 'originalHome', label: 'Original Homepage' }],
  };

  return (
    <main className={styles.Home}>
      <h1>Elanora Manson</h1>
      <p>Software... Something or Other - Portland, OR, US</p>
      <Intro />
      <SiteMap {...routes} />
    </main>
  );
};

export default Home;
