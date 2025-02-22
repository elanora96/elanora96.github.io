import {
  type RouteConfig,
  index,
  layout,
  route,
} from '@react-router/dev/routes';

import { blogPosts } from './pages/blog/blogposts';

const blogPostNestedRoutes = blogPosts.map(({ postName, blogPostIndexPath }) =>
  route(postName, blogPostIndexPath),
);

export default [
  layout('common/components/layouts/AppLayout.tsx', [
    index('pages/home/index.tsx'),
    route('resume', 'pages/resume/index.tsx'),
    route('originalHome', 'pages/original-home/index.tsx'),

    route('blog', 'pages/blog/index.tsx', blogPostNestedRoutes),

    route('*?', 'pages/catchall/catchall.mdx'),
  ]),
] satisfies RouteConfig;
