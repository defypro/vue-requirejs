function resolve(path){
	return function(resolve){
	    return require([path],resolve);
	}
}

define(['vue','vueRouter'], function(vue,vueRouter) {
	vue.use(vueRouter);
	var router = new vueRouter({
	    routes: [
			{
				path: '/',
				name: 'welcome',
				component:resolve('pages/welcome/welcome')
			}
	    ]
	});
	return router;
});