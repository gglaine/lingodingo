import { c as create_ssr_component } from "../../chunks/ssr.js";
import { l as loadTranslations, a as locale } from "../../chunks/translations.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const load = async ({ url }) => {
    const initLocale = "fr";
    await loadTranslations(initLocale, url.pathname);
    locale.set(initLocale);
    return {};
  };
  if ($$props.load === void 0 && $$bindings.load && load !== void 0)
    $$bindings.load(load);
  return `${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
