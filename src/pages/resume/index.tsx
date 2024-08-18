import type { FCCRoute } from '@lomray/vite-ssr-boost/interfaces/fc-route';
import HistorySection from './components/HistorySection.tsx';
import GridList from './components/GridList.tsx';
import Masthead from './components/Masthead.tsx';
import { resume } from './data.ts';
import styles from './styles.module.css';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
dayjs.extend(advancedFormat);

const lastRevised = dayjs('2024-08-18');

const Resume: FCCRoute = () => {
  return (
    <main className={styles.Resume}>
      <span className={`${styles.revision} ${styles.meta}`}>
        <i>Last Revised: {lastRevised.format('MMMM Do 2024')}</i>
      </span>
      <Masthead {...resume.basics} />
      <HistorySection name="Work Experience" history={resume.work} />
      <HistorySection name="Volunteer Experience" history={resume.volunteer} />
      <HistorySection name="Education" history={resume.education} />
      <GridList name="Skills" ObjectList={resume.skills} />
      <GridList name="Interests" ObjectList={resume.interests} />
      <section>
        <article>
          <p>
            Please reach out to me for references and more information. As of{' '}
            <time dateTime="">{lastRevised.format('MMMM YYYY')} </time> I am
            currently looking for work.
          </p>
        </article>
      </section>
    </main>
  );
};

export default Resume;
