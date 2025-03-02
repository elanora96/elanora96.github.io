import { type RouteConfig, index, route } from '@react-router/dev/routes';
import { blogPosts } from './pages/blog/blogposts';
import config from '../react-router.config';

const blogPostNestedRoutes = blogPosts.map(({ postName, blogPostIndexPath }) =>
  route(postName, blogPostIndexPath),
);

export const ssrOnlyRoutes: RouteConfig = [
  route('blog/rss.xml', '[rss.xml].tsx'),
];

export const clientRoutes: RouteConfig = [
  index('pages/home/index.tsx'),
  route('resume', 'pages/resume/index.tsx'),
  route('originalHome', 'pages/original-home/index.tsx'),

  route('blog', 'pages/blog/index.tsx', blogPostNestedRoutes),

  route('*?', 'pages/catchall/catchall.mdx'),
];

export const routes: RouteConfig = config.ssr
  ? clientRoutes.concat(ssrOnlyRoutes)
  : clientRoutes;

export default routes;
