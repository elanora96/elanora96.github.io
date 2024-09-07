import { FC } from 'react';
import styles from '../styles.module.css';
import dayjs from 'dayjs';

interface HistoryObject {
  organization: string;
  location?: string;
  url?: string;
  area: string;
  summary?: string;
  highlights?: string[];
  startDate: string;
  endDate?: string;
}

interface HistorySectionProps {
  name: string;
  history: HistoryObject[];
}

const HistorySection: FC<HistorySectionProps> = (props) => {
  return (
    <section id={props.name}>
      <h2>{props.name}</h2>
      <div>
        {Object.values(props.history).map((hist) => (
          <article key={hist.startDate}>
            <header>
              <h4>
                <a href={hist.url}>{hist.organization}</a>
              </h4>
              <h5>{hist.area}</h5>
              <div className={styles.meta}>
                <div>
                  <time dateTime={hist.startDate}>
                    {dayjs(hist.startDate).format('MMMM YYYY')}
                  </time>
                  <strong>&nbsp;-&nbsp;</strong>
                  {hist?.endDate ? (
                    <time dateTime={hist.endDate}>
                      {dayjs(hist.endDate).format('MMMM YYYY')}
                    </time>
                  ) : (
                    'Present'
                  )}
                </div>
                <div>{hist.location}</div>
              </div>
            </header>
            <p>{hist.summary}</p>
            {hist.highlights ? (
              <>
                {props.name !== 'Education' ? <h5>Highlights</h5> : ''}
                <ul>
                  {hist.highlights.map((course, i) => (
                    <li key={i}>
                      <p>{course}</p>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              ''
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default HistorySection;
