import styles from './styles.module.css';
import type { FCCRoute } from '@lomray/vite-ssr-boost/interfaces/fc-route';
import { resume } from './data.ts';

const Resume: FCCRoute = () => {
  const { basics } = resume;
  return (
    <main className={styles.main}>
      <header className={styles.masthead}>
        <img src={basics.image} alt="" />
        <h1>
          {basics.name} ({basics.pronouns.join('/')})
        </h1>
        <h2>{basics.label}</h2>
        <p>{basics.summary}</p>
        <ul className={styles.iconList}>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            {[
              basics.location.city,
              basics.location.region,
              basics.location.countryCode,
            ].join(', ')}
          </li>

          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <a href={`mailto:${basics.email}`}>{basics.email}</a>
          </li>

          {basics.profiles.map((profile) => (
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </svg>
              <a href={profile.url}>
                {profile?.username ?? profile.url}
                {'  '}
              </a>
              <span className={styles.network}>({profile.network})</span>
            </li>
          ))}
        </ul>
      </header>

      <section className={styles.section}>
        <h3>Work</h3>
        {resume.work.map((workPlace) => {
          return (
            <article>
              <header>
                <h4>
                  <a href={workPlace.url}>{workPlace.name}</a>
                </h4>
                <div className={styles.meta}></div>
              </header>
              <div>
                <div>
                  <h5>{workPlace.position}</h5>
                  <div className={styles.meta}>
                    <div>
                      <time dateTime={workPlace.startDate}>
                        {workPlace.startDate}
                      </time>{' '}
                      –
                      {workPlace?.endDate ? (
                        <time dateTime={workPlace.endDate}>
                          {workPlace.endDate}
                        </time>
                      ) : (
                        'Present'
                      )}
                    </div>
                    <div>{workPlace.location}</div>
                  </div>
                </div>
                <p>{workPlace.summary}</p>

                <ul>
                  {workPlace.highlights.map((highlight) => (
                    <li>
                      <p>{highlight}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </section>

      <section id="volunteer">
        <h3>Volunteer</h3>
        <div className={styles.stack}>
          {resume.volunteer.map((e) => (
            <article>
              <header>
                <h4>{e.organization}</h4>
                <div className={styles.meta}>
                  <strong>{e.position}</strong>
                  <div>
                    <time dateTime={e.startDate}>{e.startDate}</time> –
                    {e?.endDate ? (
                      <time dateTime={e.endDate}>{e.endDate}</time>
                    ) : (
                      'Present'
                    )}
                  </div>
                </div>
              </header>
              <p>{e.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="education">
        <h3>Education</h3>
        <div className={styles.stack}>
          {resume.education.map((e) => (
            <article>
              <header>
                <h4>
                  <a href={e.url}>Fullstack Academy</a>
                </h4>
                <div className={styles.meta}>
                  <strong>{e.area}</strong>
                  <div>
                    <time dateTime="2021-02">Feb 2021</time> –
                    <time dateTime="2021-08">Aug 2021</time>
                  </div>
                </div>
              </header>

              <h5>Courses</h5>
              <ul>
                {e.courses.map((course) => (
                  <li>
                    <p>{course}</p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="skills">
        <h3>Skills</h3>
        <div className={styles.gridList}>
          {resume.skills.map((s) => (
            <div>
              <h4>{s.name}</h4>

              <ul className={styles.tagList}>
                {s.keywords.map((e) => (
                  <li>{e}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="interests">
        <h3>Interests</h3>
        <div className={styles.gridList}>
          {resume.interests.map((e) => (
            <div>
              <h4>{e.name}</h4>

              <ul className={styles.tagList}>
                {e.keywords.map((kw) => (
                  <li>{kw}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="references">
        <h3>References</h3>
        <div className={styles.stack}>
          {resume.references.map((e) => (
            <div>
              <h4>
                {e.name} - {e.organization}
              </h4>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Resume;
