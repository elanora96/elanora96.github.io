import HistorySection from './components/HistorySection.tsx';
import GridList from './components/GridList.tsx';
import Masthead from './components/Masthead.tsx';
import { resume } from './data.ts';
import styles from './styles.module.css';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
dayjs.extend(advancedFormat);

const lastRevised = dayjs(resume.revisionDate);

const Resume = () => {
  return (
    <main className={styles.Resume}>
      <span className={`${styles.revision} ${styles.meta}`}>
        <i>Last Revised: {lastRevised.format('MMMM Do 2024')}</i>
      </span>
      <Masthead {...resume.basics} />
      <HistorySection name="Work Experience" history={resume.work} />
      {resume.volunteer ? (
        <HistorySection
          name="Volunteer Experience"
          history={resume.volunteer}
        />
      ) : (
        ''
      )}
      {resume.education ? (
        <HistorySection name="Education" history={resume.education} />
      ) : (
        ''
      )}
      {resume.skills ? (
        <GridList name="Skills" ObjectList={resume.skills} />
      ) : (
        ''
      )}
      {resume.interests ? (
        <GridList name="Interests" ObjectList={resume.interests} />
      ) : (
        ''
      )}
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
