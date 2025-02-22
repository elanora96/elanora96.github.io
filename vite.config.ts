import { defineConfig } from 'vite';
import { reactRouter } from '@react-router/dev/vite';
import mdx from '@mdx-js/rollup';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    {
      enforce: 'pre',
      ...mdx(),
    },
    reactRouter(),
    tsconfigPaths(),
  ],
  assetsInclude: ['./public/assets/*'],
  publicDir: './public',
});
