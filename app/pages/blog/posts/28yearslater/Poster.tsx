import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import duration from 'dayjs/plugin/duration';
import { type FC, useCallback, useEffect, useState } from 'react';

import BiohazardSymbol from './biohazard.svg';
import TransSymbol from './trans_symbol.svg';

dayjs.extend(advancedFormat);
dayjs.extend(duration);

import styles from './styles.module.css';

const timeLine = {
  1: 'EXPOSURE 😈',
  25: 'EVACUATION (PORTLAND 🏙️)',
  26: 'HENRY 😻',
  27: 'PLEASURETOWN (PORTLAND 🌆)',
  28: 'DEVASTATION 🤘',
};

const units = {
  MONTH: 'M',
  WEEK: 'ww',
  DAY: 'D',
  HOUR: 'H',
  MINUTE: 'm',
  SECOND: 's',
};

interface PosterProps {
  date: string;
}

export const Poster: FC<PosterProps> = (props) => {
  const bigDay = dayjs(props.date);
  const diff = useCallback(
    () => dayjs.duration(bigDay.diff(dayjs())),
    [bigDay],
  );
  const [tTill, setTTill] = useState(diff);

  useEffect(() => {
    if (diff().asSeconds() > 0) {
      const intrvl = setInterval(() => {
        setTTill(diff());
      }, 1000);
      return () => {
        clearInterval(intrvl);
      };
    }
  }, [diff]);

  return (
    <main className={styles.PosterContainer}>
      <p className={styles.Subtitle}>AN ELANORA.LOL EVENT</p>
      <ul>
        {Object.entries(timeLine).map(([year, str]) => (
          <li key={year}>
            <h4>Year {year}:</h4>
            <h3>{str}</h3>
          </li>
        ))}
      </ul>
      <div className={styles.PosterTitle}>
        <h1>28</h1>
        <h1>YEARS</h1>
        <h1>LATER</h1>
        <div className={styles.PosterTitleBackground}>
          <img src={TransSymbol} />
        </div>
        <div className={styles.PosterTitleBackground}>
          <img src={BiohazardSymbol} />
        </div>
      </div>
      <div className={styles.Graphic}>
        <h1>
          <pre>{`    |\\__/,|   (\`\\ 
  _.|o o  |_   ) )
-(((---(((--------`}</pre>
        </h1>
      </div>
      <p>THE DAYS ARE NUMBERED</p>
      <p className={styles.Subtitle}>
        {bigDay.format('MMMM Do YYYY [@] h:mma')}
      </p>
      <p className={styles.Subtitle}>Message Ellie for location</p>
      <p className={styles.Subtitle}>
        {tTill.format(
          Object.entries(units)
            .map(([unit, formatCode]) => {
              return Number(tTill.format(formatCode)) >= 1
                ? `${formatCode} [${unit}S]`
                : '';
            })
            .join(' '),
        )}
      </p>
    </main>
  );
};

export default Poster;
