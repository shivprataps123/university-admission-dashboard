import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { mockApiMiddleware } from './server/mockApi.ts';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'mock-api-middleware',
      configureServer(server) {
        server.middlewares.use(mockApiMiddleware);
      },
    },
  ],
});