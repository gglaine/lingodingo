//translations.js
import i18n from 'sveltekit-i18n';

/** @type {import('sveltekit-i18n').Config} */

const config = {
  initLocale: 'fr', // Set default locale to French
  loaders: [
    {
      locale: 'en',
      key: 'common',
      loader: async () => {
        const data = (await import('./en/en.json')).default;
        console.log(data); // Check if the data is correctly imported
        return data;
      },
    },
    {
      locale: 'fr',
      key: 'common',
      loader: async () => {
        const data = (await import('./fr/fr.json')).default;
        console.log(data); // Check if the data is correctly imported
        return data;
      },
    },
    // ... additional loaders for other keys and locales
  ],
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
