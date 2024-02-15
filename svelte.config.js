import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    alias: {
			// Define your aliases here
			'$lib': './src/lib',
			'$components': './src/components'
			// Add other aliases as needed
		}
  },
  
  preprocess: vitePreprocess()
};
export default config;