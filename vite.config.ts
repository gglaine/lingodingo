import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';

export default defineConfig({
    server: {
        // Serve files from the 'src' directory
        fs: {
          strict: false,
        },
      },
    plugins: [
      sveltekit(),
      SvelteKitPWA({
        strategies: 'injectManifest',
        srcDir: 'src',
        filename: 'my-sw.js', // or `my-sw.ts`
        /* other pwa options */  
      })
    ],
    // Vite-specific configurations go here
});
