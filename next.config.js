const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});
module.export = withMDX({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
});
module.exports = {
  reactStrictMode: true,
};
