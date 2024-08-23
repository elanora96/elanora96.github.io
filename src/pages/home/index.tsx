import type { FCCRoute } from '@lomray/vite-ssr-boost/interfaces/fc-route';
import styles from './styles.module.css';
import RouteManager from '@services/route-manager';
import { Link } from 'react-router-dom';

const Home: FCCRoute = () => {
  return (
    <main className={styles.Home}>
      <h1>Elanora Manson</h1>
      <p>Software... Something or Other - Portland, OR, US</p>
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
      <div className={styles.Sitemap}>
        <h2>Sitemap: </h2>
        <h3>Active: </h3>
        <Link className={styles.Here} to={RouteManager.makeURL('home')}>
          Home
        </Link>
        <Link to={RouteManager.makeURL('resume')}>Resume</Link>
        <h3>Archive: </h3>
        <Link to={RouteManager.makeURL('originalHome')}>Original Homepage</Link>
      </div>
    </main>
  );
};

export default Home;
