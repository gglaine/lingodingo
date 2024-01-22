export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/DALL·E 2024-01-22 13.29.09 - Illustration depicting a diverse group of individuals, representing different races, origins, and styles, both young and old, engaging in language lea.png","images/dingologo.png","images/diverse.png","images/diverse_class.png","images/efel-bunch.png","images/efel-bunch1.png","images/engaging_talk.png","images/groupmob.png","images/home.png","images/lingo-logo.png","images/logo-esus.png","images/logodingo-head.png","images/museum_class.png","images/outdoor.png","images/outdoor_class.png","images/storytelling.png","images/street_class.png","images/teaching_personnel.png","images/teaching_props.png","images/various_ages.png","images/vernacular.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.wF8GaPlq.js","app":"_app/immutable/entry/app.Y0p86G0X.js","imports":["_app/immutable/entry/start.wF8GaPlq.js","_app/immutable/chunks/entry.gZ3l8jqY.js","_app/immutable/chunks/scheduler.65lUaMOu.js","_app/immutable/chunks/index._ppBPcxw.js","_app/immutable/entry/app.Y0p86G0X.js","_app/immutable/chunks/preload-helper.0HuHagjb.js","_app/immutable/chunks/scheduler.65lUaMOu.js","_app/immutable/chunks/index.WGX1G8Nk.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
