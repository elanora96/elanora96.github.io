import { FC } from 'react';
import { EmailSVG, LocationSVG, ProfileSVG } from './SVGs';
import styles from '../styles.module.css';

interface MastheadProps {
  name: string;
  pronouns: string[];
  label: string;
  image?: string;
  email: string;
  summary: string;
  location: {
    city: string;
    countryCode: string;
    region: string;
  };
  profiles: {
    network: string;
    url: string;
    username?: string;
  }[];
}

const Masthead: FC<MastheadProps> = (props) => {
  return (
    <header className={styles.masthead}>
      {props.image ? <img src={props.image} /> : ''}
      <span>
        <h1>{props.name}</h1>
        <h3>({props.pronouns.join('/')})</h3>
      </span>
      <h2>{props.label}</h2>
      <p>{props.summary}</p>
      <ul>
        <li>
          <LocationSVG />
          {[
            props.location.city,
            props.location.region,
            props.location.countryCode,
          ].join(', ')}
        </li>

        <li>
          <EmailSVG />
          <a href={`mailto:${props.email}`}>{props.email}</a>
        </li>

        {props.profiles.map((profile) => (
          <li key={profile.network}>
            <ProfileSVG />
            <a href={profile.url}>{profile?.username ?? profile.url}</a>
            <span>({profile.network})</span>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Masthead;
