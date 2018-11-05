/**
 * 配置编译环境和线上环境之间的切换
 * 
 * localapi: 是否使用本地API接口
 * proapi: 是否使用线上API接口
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 * 
 */
// let localapi = false;
// let proapi = false;
let  api_baseUrl = 'http://47.94.167.18:8089/deliver/'
// let  api_baseUrl = 'http://localhost:8080/mrst/'
// let routerMode = 'hash';
// let imgBaseUrl = 'https://fuss10.elemecdn.com';
// let ApiUrl = '';

// if (localapi) {
// 	ApiUrl = 'http://localhost:8000';
// 	imgBaseUrl = 'http://images.cangdu.org/';
// }else if(proapi){
// 	ApiUrl = 'http://cangdu.org:8001';
// 	imgBaseUrl = 'http://images.cangdu.org/';
// }
// if (process.env.NODE_ENV == 'development') {
	
// }else if(process.env.NODE_ENV == 'production'){
// 	proapi = true;
// 	ApiUrl = 'http://cangdu.org:8001';
// 	imgBaseUrl = 'http://images.cangdu.org/';
// }
let pwd = '123456'

export {
	api_baseUrl,
	pwd,
	// routerMode,
	// imgBaseUrl,
	// ApiUrl,
	// localapi,
	// proapi,
}