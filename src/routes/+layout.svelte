<script lang="ts">
    import { locale, loadTranslations } from '$lib/translations';
    import type { Load } from '@sveltejs/kit';
  
    export const load: Load = async ({ url }) => {
      const initLocale = 'fr'; // Default to French
      await loadTranslations(initLocale, url.pathname);
      locale.set(initLocale); // Correctly using the store's set method
  
      return {};
    };
  </script>
  
  <slot />
  