const pluginWebC = require("@11ty/eleventy-plugin-webc");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(pluginWebC, {
		components: "_components/**/*.webc",
	});

	return {
		dir: {
			input: "content/",
			includes: "../_includes",
			data: "../_data",
		},
	};
};
