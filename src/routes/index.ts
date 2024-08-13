import type { TRouteObject } from '@lomray/vite-ssr-boost/interfaces/route-object';
import RouteManager from '@services/route-manager';
import NotFound from '@pages/not-found';

const routes: TRouteObject[] = [
  {
    ErrorBoundary: NotFound,
    children: [
      {
        index: true,
        lazy: () => import('@pages/home'),
      },
      {
        path: RouteManager.path('resume'),
        lazy: () => import('@pages/resume'),
      },
    ],
  },
];

export default routes;
