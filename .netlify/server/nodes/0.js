import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.4Iyfmhzo.js","_app/immutable/chunks/translations.3hwcORIA.js","_app/immutable/chunks/preload-helper.0HuHagjb.js","_app/immutable/chunks/index._ppBPcxw.js","_app/immutable/chunks/scheduler.65lUaMOu.js","_app/immutable/chunks/index.WGX1G8Nk.js"];
export const stylesheets = [];
export const fonts = [];
