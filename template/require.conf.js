require.config({
	baseUrl : "./src",
    paths: {
        api: 'lib/api',
        cache: 'lib/cache',
        text: 'lib/require-text/text.min',
        css: 'lib/require-css/css.min',
        vue: 'lib/vue.min',
        vueRouter: 'lib/vue-router.min'
    },
});
require(['main.js']);