// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import auth from './auth'
//引入路由，及路由设置
import VueRouter from 'vue-router'
// import routerConfig from './router'
// import routes from './router-config'



//另一种引入方式
// const Login = require('./components/login.vue')
import Login from './components/login'
import Index from './components/index'
import Notfound from './components/notfound'
import Layout from './components/layout'

Vue.use(ElementUI)
Vue.use(VueRouter)

//配置路由，创建路由器实例
// const router =new VueRouter({
// 	history :true,
// 	saveScrollPosition:true
// });
// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }


const routes = [
  { path: '/', component: Login },
  { path: '/index', component:Index},
  { path:'/layout', component:Layout},
  { path:'*', component:Notfound}
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes 
  // （缩写）相当于 routes: routes
})


//导航钩子,当前页面不是登陆页，并且没有登陆状态，跳转到登陆页
// router.beforeEach((to,from,next)=>{
// 	if(!auth.loggedIn() && to.name!=='login'){
// 		next({
// 			path: '/loign'
// 		})
// 	}else{
// 		next()
// 	}
// })

//一定要加入router,
new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: { App }
})

//push可以定义默认路由页面
// router.push('/InfoManage')