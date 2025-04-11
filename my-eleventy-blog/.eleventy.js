module.exports = function (eleventyConfig) {
  // Tambahkan koleksi 'posts' dari folder ./posts/*.md
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("./posts/*.md");
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};
