import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Configure MIME types
    mimeTypes: {
      // Add 'application/javascript' as MIME type for .jsx files
      'jsx': 'application/javascript',
    },
  },
});
