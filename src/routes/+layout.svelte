<script lang="ts">
  import { onMount } from 'svelte';
  import { locale, loadTranslations } from '$lib/translations';
  import Header from '$lib/Header.svelte';
  import Footer from '$lib/Footer.svelte';

  // This assumes you've already configured svelte-i18n in your $lib/translations
  // and that it exports a 'locale' store among other things.

  onMount(() => {
    const initLocale = localStorage.getItem('userLocale') || 'fr';
    locale.set(initLocale); // This updates the app's current locale
    loadTranslations(initLocale);
  });
</script>

<Header />
<slot />
<Footer />
