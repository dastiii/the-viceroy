module.exports = {
  publicPath: "./",
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "THE VICEROY - Hotels & Resorts";
      return args;
    });
  },
  pwa: {
    name: "THE VICEROY - Hotels & Resorts",
    themeColor: "#e2b007",
    msTileColor: "#e2b007",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black"
  }
};
