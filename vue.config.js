module.exports = {
  configureWebpack: {
    output: {
      libraryExport: "lib"
    }
  },
  devServer: {
    host: "0.0.0.0",
    hot: true,
    disableHostCheck: true
  }
};
