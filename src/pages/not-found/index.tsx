import { FCRoute } from '@lomray/vite-ssr-boost/interfaces/fc-route';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { WINDOW_OBJ } from '@constants/index';

const NotFound: FCRoute = () => {
  const error = useRouteError() as Error;

  if (
    WINDOW_OBJ &&
    (error?.message?.startsWith(
      'Failed to fetch dynamically imported module',
    ) ||
      error?.message?.startsWith('Unable to preload') ||
      error?.message?.includes('Importing a module script failed'))
  ) {
    console.error('Failed to fetch dynamically imported module #1.', error);

    // eslint-disable-next-line no-self-assign
    WINDOW_OBJ.location.href = WINDOW_OBJ.location.href;

    return null;
  }

  if (isRouteErrorResponse(error)) {
    return <h1>{error.status}</h1>;
  }

  return <h1>{error.message}</h1>;
};

export default NotFound;
