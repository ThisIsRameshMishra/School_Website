/** @format */

import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // build: {
  //   outDir: 'build',
  //   emptyOutDir: true,
  //   minify: true,
  //   sourcemap: false,
  //   rollupOptions: {
  //     input: {
  //       main: './index.html',
  //       nested: './nested/index.html',
  //     },
  //   },
  // },
  // server: {
  //   host: true,
  // },
});
