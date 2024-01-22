import { c as create_ssr_component, e as escape, a as add_attribute, b as each, v as validate_component } from "../../chunks/ssr.js";
import { s as subscribe } from "../../chunks/utils.js";
import { t, a as locale } from "../../chunks/translations.js";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  let $locale, $$unsubscribe_locale;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $$unsubscribe_locale = subscribe(locale, (value) => $locale = value);
  $$unsubscribe_t();
  $$unsubscribe_locale();
  return ` <nav class="flex flex-col justify-start md:flex-row md:items-center bg-gray-100 p-4 shadow-md"><div class="md:mr-4" data-svelte-h="svelte-1h9rwlu"> <img src="/images/lingo-logo.png" alt="Logo" class="h-16 md:h-16"> </div> <div class="flex-grow md:flex-grow-0"> <a href="/" class="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">${escape($t("common.navbar.home"))}</a> <a href="/about" class="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">${escape($t("common.navbar.about"))}</a></div> <select${add_attribute("value", $locale, 0)} class="bg-white border border-gray-300 text-gray-800 py-2 px-4 rounded leading-tight focus:outline-none focus:shadow-outline mt-3 md:mt-0"><option value="en">${escape($t("common.navbar.english"))}</option><option value="fr">${escape($t("common.navbar.french"))}</option></select></nav>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="bg-slate-100 text-slate-800 py-6"><div class="container mx-auto px-4"><div class="flex flex-wrap justify-between" data-svelte-h="svelte-r9uzef"> <div class="w-full md:w-1/4 mb-6 md:mb-0"><img src="/images/lingo-logo.png" alt="Logo" class="h-16 md:h-16">  <ul class="ml-2"><li><a href="/home" class="hover:text-gray-300">Home</a></li> <li><a href="/about" class="hover:text-gray-300">About Us</a></li> <li><a href="/contact" class="hover:text-gray-300">Contact</a></li> <li><a href="/privacy" class="hover:text-gray-300">ESS - Entreprise Sociale et Solidaire</a></li></ul></div>  <div class="w-full md:w-1/4"><h5 class="uppercase mb-4 font-bold">Suivez nous</h5> <ul class="flex items-center space-x-4"><li><a href="#" class="hover:text-gray-300">Facebook</a></li> <li><a href="#" class="hover:text-gray-300">Twitter</a></li> <li><a href="#" class="hover:text-gray-300">LinkedIn</a></li></ul></div></div> <div class="text-center mt-6"><p class="text-sm" data-svelte-h="svelte-oi5v6x">Agrée ESS - Entreprise Sociale et Solidaire</p> <p class="text-sm" data-svelte-h="svelte-1pekcdk">Association déclarée, reconnue d&#39;utilité publique</p> <p class="text-sm">© ${escape((/* @__PURE__ */ new Date()).getFullYear())} EFEL CENTER. All Rights Reserved.</p></div> <img src="/images/logo-esus.png" alt="Logo" class="h-24 md:h-24 my-4 mx-auto"> </div> </footer>`;
});
const css = {
  code: `.hero.svelte-1tn5n7y::before{content:"";background-image:url('/images/groupmob.png');background-size:cover;background-position:center;filter:blur(3px);position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1}button.svelte-1tn5n7y{padding:0.5rem 1rem;background-color:#007bff;color:white;border:none;border-radius:4px;cursor:pointer}button.svelte-1tn5n7y:hover{background-color:#0056b3}`,
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $$result.css.add(css);
  $$unsubscribe_t();
  return `<div class="hero relative flex flex-col items-center justify-center md:bg-contain svelte-1tn5n7y" style="height: 70vh;"> <img src="/images/lingo-logo.png" alt="Logo" class="mb-4 w-48 h-48">  <h1 class="text-4xl font-bold text-white mb-4">${escape($t("common.hero.title"))}</h1> <p class="text-2xl text-white mb-6">${escape($t("common.hero.subtitle"))}</p> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded svelte-1tn5n7y">${escape($t("common.hero.cta"))}</button> </div>`;
});
const Methods = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  const methods = [
    {
      id: "clt",
      titleKey: "common.methods.clt.title",
      descKey: "common.methods.clt.description",
      imageSrc: "/images/diverse.png"
    },
    {
      id: "tpr",
      // Replace with the actual image source
      titleKey: "common.methods.tpr.title",
      descKey: "common.methods.tpr.description",
      imageSrc: "/images/engaging_talk.png"
    },
    {
      id: "storytelling",
      // Replace with the actual image source
      titleKey: "common.methods.storytelling.title",
      descKey: "common.methods.storytelling.description",
      imageSrc: "/images/storytelling.png"
    }
  ];
  $$unsubscribe_t();
  return `  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">${each(methods, (method) => {
    return `<div class="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden"><img${add_attribute("src", method.imageSrc, 0)}${add_attribute("alt", `Image for ${method.id}`, 0)} class="w-full md:w-1/2 object-cover"> <div class="p-4"><h3 class="text-xl font-semibold text-gray-800 mb-2">${escape($t(method.titleKey))}</h3> <p class="text-gray-600">${escape($t(method.descKey))}</p></div> </div>`;
  })} </div>`;
});
const Sessions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  const sessions = [
    {
      id: "accents",
      image: "/images/various_ages.png",
      titleKey: "common.sessions.accents.title",
      descKey: "common.sessions.accents.description"
    },
    {
      id: "etymology",
      image: "/images/teaching_props.png",
      titleKey: "common.sessions.etymology.title",
      descKey: "common.sessions.etymology.description"
    },
    {
      id: "news",
      image: "/images/teaching_personnel.png",
      titleKey: "common.sessions.news.title",
      descKey: "common.sessions.news.description"
    },
    {
      id: "bav",
      image: "/images/street_class.png",
      titleKey: "common.sessions.bav.title",
      descKey: "common.sessions.bav.description"
    },
    // Assuming 'outdoor_class', 'museum_class', and 'dingologo' are IDs for other sessions
    {
      id: "outdoor",
      image: "/images/outdoor_class.png",
      titleKey: "common.sessions.outdoor.title",
      descKey: "common.sessions.outdoor.description"
    },
    {
      id: "museum",
      image: "/images/museum_class.png",
      titleKey: "common.sessions.museum.title",
      descKey: "common.sessions.museum.description"
    }
  ];
  $$unsubscribe_t();
  return `<div class="grid grid-cols-1 md:grid-cols-2 gap-4">${each(sessions, (session) => {
    return `<div class="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden"><img${add_attribute("src", session.image, 0)}${add_attribute("alt", `Image for ${session.id}`, 0)} class="w-full md:w-1/2 object-cover"> <div class="p-4"><h3 class="text-xl font-semibold text-gray-800 mb-2">${escape($t(session.titleKey))}</h3> <p class="text-gray-600">${escape($t(session.descKey))}</p></div> </div>`;
  })} </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `  <div class="container mx-auto"> ${validate_component(Header, "Header").$$render($$result, {}, {}, {})}  <div class="mt-8"> ${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}</div>  <div class="mt-8"> <h2 class="text-2xl font-semibold mb-4" data-svelte-h="svelte-1j2yi2z">Methods Section</h2> ${validate_component(Methods, "Methods").$$render($$result, {}, {}, {})}</div>  <div class="mt-8"> <h2 class="text-2xl font-semibold mb-4" data-svelte-h="svelte-2o3fgy">Sessions Section</h2> ${validate_component(Sessions, "Sessions").$$render($$result, {}, {}, {})}</div>  <div class="mt-8"> <h2 class="text-2xl font-semibold mb-4" data-svelte-h="svelte-1lsk0rz">That&#39;s All Folks</h2> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div></div> `;
});
export {
  Page as default
};
