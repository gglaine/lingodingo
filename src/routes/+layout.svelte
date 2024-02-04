<script lang="ts">
  import { onMount } from 'svelte';
  import { locale, loadTranslations } from '$lib/translations';
  import Header from '$lib/Header.svelte';
  import Footer from '$lib/Footer.svelte';
  import "../app.css";

  // Function to determine the default locale from the browser or fallback
  function getDefaultLocale(): string {
    // Get the browser's default language
    const navigatorLocale = navigator.language;

    // List of supported locales in your app
    const supportedLocales = ['en', 'fr']; // Extend this list as needed

    // Attempt to find the best match for the browser's locale within the supported ones
    const bestMatch = supportedLocales.find(supportedLocale => 
      navigatorLocale.startsWith(supportedLocale)
    );

    // Return the best match or fallback to 'fr' if no match is found
    return bestMatch || 'fr';
  }

  onMount(async () => {
    // Determine the initial locale from localStorage or the browser settings
    const initLocale = localStorage.getItem('userLocale') || getDefaultLocale();

    // Set the initial locale
    locale.set(initLocale);

    // Load the translations for the determined locale
    // Assuming loadTranslations returns a Promise, you can await it for better error handling
    try {
      await loadTranslations(initLocale);
      console.log(`Loaded translations for ${initLocale}`);
    } catch (error) {
      console.error(`Error loading translations for ${initLocale}:`, error);
    }
  });
</script>

<Header />
<slot />
<Footer />
