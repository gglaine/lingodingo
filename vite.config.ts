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
        filename: 'my-sw.ts', // or `my-sw.ts`
        injectManifest: {
          swSrc: './src/my-sw.ts', // Path to your service worker source file
          // swDest is automatically handled
        },
        /* other pwa options */  
      })
    ],
    // Vite-specific configurations go here
});
