import { defineConfig } from 'vite';
import { reactRouter } from '@react-router/dev/vite';
import mdx from '@mdx-js/rollup';
import tsconfigPaths from 'vite-tsconfig-paths';
import { reactRouterDevTools } from 'react-router-devtools';

export default defineConfig({
  plugins: [
    {
      enforce: 'pre',
      ...mdx(),
    },
    reactRouterDevTools(),
    reactRouter(),
    tsconfigPaths(),
  ],
  assetsInclude: ['./public/assets/*'],
  publicDir: './public',
});
