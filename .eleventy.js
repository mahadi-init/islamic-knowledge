const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSitemap = require("@quasibit/eleventy-plugin-sitemap");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("public");

  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSitemap, {
    sitemap: {
      hostname: "https://yourdomain.com",
    },
  });

  eleventyConfig.addCollection("posts", (collection) =>
    collection.getFilteredByGlob("src/posts/*.md"),
  );

  return {
    dir: {
      input: "src",
      output: "dist",
    },
    markdownTemplateEngine: "njk",
  };
};
