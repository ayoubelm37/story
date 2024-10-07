import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@shadcn/ui': '/node_modules/@shadcn/ui', // Ensure this path matches where the package is located
    },
  },
});
