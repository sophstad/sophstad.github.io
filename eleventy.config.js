export default async function(eleventyConfig) {
  eleventyConfig.addGlobalData("layout", "layouts/page.liquid");
  eleventyConfig.addPassthroughCopy("bundle.css");
  eleventyConfig.addPassthroughCopy("background.js");
};
