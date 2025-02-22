import dayjs from 'dayjs';
import { Link, Outlet } from 'react-router';
import styles from './styles.module.css';

import { type BlogPost, blogPosts } from './blogposts';

import type { Route } from './+types/index';

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
            <tr key={date}>
              <td>{dayjs(date).format('YYYY-MM-DD[ at ]hh:mma')}</td>
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

const Blog = () => {
  return (
    <div className={styles.BlogContainer}>
      <div className={styles.BlogPost}>
        <Outlet />
      </div>
      <BlogTableOfContents />
    </div>
  );
};

export default Blog;
