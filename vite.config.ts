import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        // Serve files from the 'src' directory
        fs: {
          strict: false,
        },
      },
    plugins: [sveltekit()],
    // Vite-specific configurations go here
});
