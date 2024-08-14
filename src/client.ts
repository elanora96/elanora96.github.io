import entryClient from '@lomray/vite-ssr-boost/browser/entry';
import App from './App';
import routes from './routes/index';

void entryClient(App, routes);
