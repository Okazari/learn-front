module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          // only transpile what's needed to be transpiled according to the current node version
          node: "current"
        }
      }
    ]
  ]
};
