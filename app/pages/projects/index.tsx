import { Link, Outlet } from 'react-router';
import { projects } from './projects';
import type { Route } from './+types/index';
import type { FC } from 'react';
import styles from './styles.module.css';

export function meta(metaArgs: Route.MetaArgs) {
  const { location } = metaArgs;
  return [
    { title: `elanora.lol - ${location.pathname}` },
    { name: 'description', content: 'elanora.lol Projects' },
  ];
}

const Projects: FC = () => {
  return (
    <article className={styles.ProjectContainer}>
      <nav className={styles.ProjectNav}>
        {projects.map((p) => {
          return (
            <article key={p.postName} className={styles.ProjectCard}>
              <h1>
                <Link to={p.postName}>{p.postName}</Link>
              </h1>
              <section>{p.date.toString()}</section>
              <section>{p.description}</section>
              {Array.isArray(p?.externalLink) ? (
                <section>
                  {p.externalLink.map((e) => (
                    <Link key={e} to={e}>
                      {e}
                    </Link>
                  ))}
                </section>
              ) : (
                ''
              )}
              <h5>{p.tags?.join(' ')}</h5>
            </article>
          );
        })}
      </nav>
      <article>
        <Outlet />
      </article>
    </article>
  );
};

export default Projects;
