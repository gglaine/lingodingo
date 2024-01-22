import { l as loadTranslations } from "../../chunks/translations.js";
const load = async ({ url }) => {
  const { pathname } = url;
  const initLocale = "en";
  await loadTranslations(initLocale, pathname);
  console.log("Translations loaded successfully");
  return {};
};
export {
  load
};
