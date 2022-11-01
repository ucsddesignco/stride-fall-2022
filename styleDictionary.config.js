module.exports = {
  source: ["tokens-main/*.json"],
  platforms: {
    scss: {
      transforms: ["attribute/cti", "name/cti/kebab", "color/hsl"],
      buildPath: "src/styles/tokens/",
      files: [
        {
          destination: "_tokens.scss",
          format: "scss/variables",
        },
      ],
    },
    json: {
      transforms: ["attribute/cti", "color/hsl"],
      buildPath: "src/styles/tokens/",
      files: [
        {
          destination: "tokens.json",
          format: "json/nested",
        },
      ],
    },
  },
};
