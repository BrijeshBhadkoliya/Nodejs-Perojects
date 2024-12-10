import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
      routes(defineRoutes) {
        return defineRoutes((route) => {
          route('/auth/*', 'service-route.ts', { id: 'auth' }),
          route('/-/*', 'service-route.ts', { id: 'service' })
        });
      },
    }),
    tsconfigPaths(),
    viteCommonjs({
      include: ['util'],
    }),
  ],
  optimizeDeps: {
    include: ['react', 'react-dom', '@kottster/common', '@kottster/server'],
    exclude: ['@kottster/react'],
  },
});