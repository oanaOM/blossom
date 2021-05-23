module.exports = {
  presets: ["@expo/next-adapter/babel"],
  overrides: [
    {
      test: "./node_modules/@expo/next-adapter/document.js",
      plugins: [["@babel/plugin-proposal-class-properties"]],
    },
  ],
};
