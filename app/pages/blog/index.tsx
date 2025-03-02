import dayjs from 'dayjs';
import { Link, Outlet } from 'react-router';
import type { Route } from './+types/index';
import { type BlogPost, blogPosts } from './blogposts';
import styles from './styles.module.css';
import config from '../../../react-router.config';

export function meta(metaArgs: Route.MetaArgs) {
  const { location } = metaArgs;
  return [
    { title: `elanora.lol - ${location.pathname}` },
    { name: 'description', content: 'elanora.lol Blog Index' },
  ];
}

const BlogTableOfContents = () => {
  const dateAscSort = (a: BlogPost, b: BlogPost) =>
    dayjs(b.date).unix() - dayjs(a.date).unix();
  return (
    <div className={styles.BlogTOC}>
      <table>
        <thead>
          <tr>
            <th colSpan={2}>
              <h3>Posts</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          {blogPosts.sort(dateAscSort).map(({ date, postName }) => (
            <tr key={date.unix()}>
              <td>{date.format('YYYY-MM-DD[ at ]hh:mma')}</td>
              <td>
                <Link to={postName}>{postName}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const RSS = () => (
  <div className={styles.RSS}>
    <Link to={'/blog/rss.xml'}>
      <h4>Add to RSS</h4>
    </Link>
  </div>
);

const Blog = () => {
  return (
    <div className={styles.BlogContainer}>
      <div className={styles.BlogPost}>
        <Outlet />
      </div>
      <BlogTableOfContents />
      {config.ssr ? <RSS /> : ''}
    </div>
  );
};

export default Blog;
