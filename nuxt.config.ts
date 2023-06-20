// https://nuxt.com/docs/api/configuration/nuxt-config
const gymInfo = {
	name: "Gym Website",
	description: "Gym Website",
};

export default defineNuxtConfig({
	app: {
		head: {
			title: gymInfo.name,
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
			meta: [
				{ name: "description", content: gymInfo.description },
				{ charset: "utf-8" },
				{ property: "og:type", content: "website" },
				{ property: "og:title", content: gymInfo.name },
				{ property: "og:description", content: gymInfo.description },
			],
		},
	},
	css: ["~/assets/style/main.sass"],
});
