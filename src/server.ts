import entryServer from '@lomray/vite-ssr-boost/node/entry';
import App from './App';
import routes from './routes';

export default entryServer(App, routes);
