import { loadTranslations } from '$lib/translations';

export const load = async ({ url }) => {
    const { pathname } = url;
    const initLocale = 'en'; // You can dynamically determine the initial locale here

    await loadTranslations(initLocale, pathname);

    console.log('Translations loaded successfully');

    return {};
};


