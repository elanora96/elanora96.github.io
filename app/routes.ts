import { type RouteConfig, index, route } from '@react-router/dev/routes';
import { blogPostCollection } from './pages/blog/blogposts';
import { projectPostCollection } from './pages/projects/projects';
import config from '../react-router.config';

export const ssrOnlyRoutes: RouteConfig = [
  route('blog/rss.xml', '[rss.xml].tsx'),
];

export const clientRoutes: RouteConfig = [
  index('pages/home/index.tsx'),
  route('resume', 'pages/resume/index.tsx'),
  route('originalHome', 'pages/original-home/index.tsx'),

  route('blog', 'pages/blog/index.tsx', blogPostCollection.getNestedRoutes()),
  route(
    'projects',
    'pages/projects/index.tsx',
    projectPostCollection.getNestedRoutes(),
  ),

  route('*?', 'pages/catchall/catchall.mdx'),
];

export const routes: RouteConfig = config.ssr
  ? clientRoutes.concat(ssrOnlyRoutes)
  : clientRoutes;

export default routes;
