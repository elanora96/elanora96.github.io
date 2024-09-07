import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import SsrBoost from '@lomray/vite-ssr-boost/plugin';
import mdx from '@mdx-js/rollup';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
  },
  plugins: [
    {
      enforce: 'pre',
      ...mdx(),
    },
    SsrBoost(),
    react(),
  ],
  assetsInclude: ['../public/assets/*'],
  publicDir: '../public',
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      cssModules: {
        pattern: '[hash]_[local]',
      },
    },
  },
});
