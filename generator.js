module.exports = (api, options) => {
  api.extendPackage({
    dependencies: {
      'vue-svg-loader': '^0.11.0'
    },
    vue: {
      pluginOptions: {
        svgLoader: { svgo: { plugins: [] } }
      }
    }
  });

  api.exitLog(`Add your SVGO plugin configuration in vue.config.js`, 'done');
};
