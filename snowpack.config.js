// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
	extends: "@snowpack/app-scripts-svelte",
	mount: {
		public: { url: "/", static: true },
		src: "/dist",
		assets: {url: "/assets",static: true}
	},
	plugins: [
		[
			"@snowpack/plugin-build-script",
			{ cmd: "postcss", input: [".css"], output: [".css"] },
		],
		"@snowpack/plugin-typescript",
		'@snowpack/plugin-sass'
	],
	packageOptions: {
		installTypes: true,
		polyfillNode: true,
	},
	devOptions: {
		port: 5000,
	},
	buildOptions: {
		clean: true,
		metaUrlPath: "snowpack",
	},
	optimize: {
		bundle: true,
		minify: true,
		treeshake: true,
		target: "es2020",
	},
};
