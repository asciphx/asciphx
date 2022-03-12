module.exports = function (api) {
  api.cache(true);
  const presets = ["@babel/preset-env"];
  const plugins = [
    ["@babel/plugin-proposal-pipeline-operator", { proposal: "minimal" }],
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-private-methods", { loose: true }],
    ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
    ["@babel/plugin-transform-runtime",{corejs: false,helpers: true,
      regenerator: true,useESModules: false}],"@babel/plugin-transform-flow-strip-types",
    ["@babel/proposal-class-properties", {loose: true}],"transform-inline-consecutive-adds",
    "@babel/plugin-proposal-do-expressions","@babel/plugin-proposal-partial-application",
    "@babel/plugin-proposal-export-namespace-from","@babel/plugin-proposal-function-sent",
    "@babel/plugin-proposal-export-default-from","@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-proposal-nullish-coalescing-operator","@babel/plugin-proposal-function-bind",
    "@babel/plugin-syntax-dynamic-import","@babel/plugin-proposal-logical-assignment-operators"
  ];
  return {
    presets,
    plugins
  };
}