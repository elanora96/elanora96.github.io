import Marquee from '@components/Marquee';
import { type FC } from 'react';
import styles from './styles.module.css';

const Home: FC = () => {
  const dateDiff = (date1: Date, date2: Date) =>
    Math.floor((date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24));

  const elanoraLOLEpoch = new Date('2023-08-11');
  const elanoraLOLReact = new Date('2024-08-03');

  const diff = dateDiff(elanoraLOLEpoch, new Date());
  const reactDiff = dateDiff(elanoraLOLReact, new Date());

  return (
    <main className={styles.main}>
      <div className={styles.coolText}>
        <Marquee>UNDER CONSTRUCTION!</Marquee>
      </div>
      <img src="assets/images/cool_construction_skull.bmp" />
      <p className={styles.ramble}>
        I&apos;ve had this site for just{' '}
        <span id="dynamic-date">{diff === 1 ? '1 day' : `${diff} days`}</span>
        <noscript>a few days</noscript> buddy!
      </p>
      <p className={styles.ramble}>
        This site has been in React for just{' '}
        <span id="dynamic-date">
          {reactDiff === 1 ? '1 day' : `${reactDiff} days`}
        </span>
        <noscript>a few days</noscript> pal!
      </p>
      <audio controls>
        <source src="assets/sounds/zoowuEkF.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </main>
  );
};

export default Home;
