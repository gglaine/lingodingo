<!-- src/routes/layout.svelte -->
<script lang="ts">
  import { locale, loadTranslations } from '$lib/translations';
  import type { Load } from '@sveltejs/kit';
  import Header from '$lib/Header.svelte';
  import Footer from '$lib/Footer.svelte';

  export const load: Load = async ({ url }) => {
    const initLocale = 'fr'; // Default to French
    await loadTranslations(initLocale, url.pathname);
    locale.set(initLocale); // Correctly using the store's set method

    return {};
  };
</script>

<Header />

<slot />

<Footer />
