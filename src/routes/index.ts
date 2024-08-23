import AppLayout from '@components/layouts/AppLayout';
import type { TRouteObject } from '@lomray/vite-ssr-boost/interfaces/route-object';
import NotFound from '@pages/not-found';
import RouteManager from '@services/route-manager';

const routes: TRouteObject[] = [
  {
    Component: AppLayout,
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
      {
        path: RouteManager.path('originalHome'),
        lazy: () => import('@pages/original-home'),
      },
    ],
  },
];

export default routes;
