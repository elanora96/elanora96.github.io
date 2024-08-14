import { FC } from 'react';
import styles from '../styles.module.css';

interface TagListObject {
  name: string;
  keywords: string[];
}

interface GridListProps {
  ObjectList: TagListObject[];
  name: string;
}

const GridList: FC<GridListProps> = (props) => {
  return (
    <section id="interests">
      <h3>{props.name}</h3>
      <div>
        {Object.values(props.ObjectList).map((listSection) => (
          <div key={props.name + listSection.name}>
            <h4>{listSection.name}</h4>
            <ul className={styles.tagList}>
              {listSection.keywords.map((kw) => (
                <li key={kw}>{kw}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GridList;
