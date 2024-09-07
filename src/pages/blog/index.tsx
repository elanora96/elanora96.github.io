import type { FCCRoute } from '@lomray/vite-ssr-boost/interfaces/fc-route';
import RouteManager from '@services/route-manager';
import dayjs from 'dayjs';
import {
  type ComponentType,
  type FC,
  type LazyExoticComponent,
  Suspense,
  lazy,
} from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './styles.module.css';

interface BlogPost {
  postName: string;
  date: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  blogPostComponent: LazyExoticComponent<ComponentType<any>>;
}

const blogPosts: BlogPost[] = [
  {
    postName: 'This is a blog post',
    date: '2024-09-02 14:35:00-8:00',
    blogPostComponent: lazy(() =>
      import('./posts/test.mdx')
        .then((blogPostComponent) => blogPostComponent)
        .catch((e: unknown) => {
          throw e;
        }),
    ),
  },
];

const BlogTOC: FC = () => {
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
          {blogPosts.sort(dateAscSort).map((blogPost) => (
            <tr key={blogPost.date}>
              <td>{dayjs(blogPost.date).format('YYYY-MM-DD[ at ]hh:mma')}</td>
              <td>
                <Link
                  to={RouteManager.makeURL('blog.post', {
                    post: blogPost.postName,
                  })}
                >
                  {blogPost.postName}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Blog: FCCRoute = () => {
  const { post } = useParams<{ post?: string }>();

  const PostComponent = blogPosts.find(
    (blogPost) => blogPost.postName === post,
  )?.blogPostComponent;

  return (
    <div className={styles.BlogContainer}>
      <div className={styles.BlogPost}>
        {PostComponent ? (
          <Suspense fallback={<h1>Loading...</h1>}>
            <PostComponent />
          </Suspense>
        ) : post ? (
          <h1>404: This blog post has been removed or never existed</h1>
        ) : (
          ''
        )}
      </div>
      <BlogTOC />
    </div>
  );
};

export default Blog;
