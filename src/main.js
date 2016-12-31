// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
//引入路由，及路由设置
import VueRouter from 'vue-router'
// import routerConfig from './router'

Vue.use(ElementUI)
Vue.use(VueRouter)

//配置路由，创建路由器实例
// const router =new VueRouter({
// 	history :true,
// 	saveScrollPosition:true
// });
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }


const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

//一定要加入router,
new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: { App }
})

//push可以定义默认路由页面
router.push('/foo')