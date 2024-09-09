import { type ComponentType, type LazyExoticComponent, lazy } from 'react';

export interface BlogPost {
  postName: string;
  date: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  blogPostComponent: LazyExoticComponent<ComponentType<any>>;
}

export const blogPosts: BlogPost[] = [
  {
    postName: 'This is a blog post',
    date: '2024-09-02 14:35:00',
    blogPostComponent: lazy(() =>
      import('./posts/test.mdx')
        .then((blogPostComponent) => blogPostComponent)
        .catch((e: unknown) => {
          throw e;
        }),
    ),
  },
  {
    postName: '28 Years Later',
    date: '2024-09-07 18:33:00',
    blogPostComponent: lazy(() =>
      import('./posts/28yearslater/28yearslater.mdx')
        .then((blogPostComponent) => blogPostComponent)
        .catch((e: unknown) => {
          throw e;
        }),
    ),
  },
];

export default blogPosts;
