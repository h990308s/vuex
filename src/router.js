import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Tjzz from './components/Tjzz.vue'
import denglu from './components/denglu.vue'
import zhuce from './components/zhuce.vue'
import tixe from './components/tixe.vue'
import pinglun from './components/pingl.vue'
import tougao from './components/toug.vue'
import xihuan from './components/xih.vue'
import guanzhu from './components/guanz.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
		{
			path:'/tjzz',
			component:Tjzz
		},
		{
			path:'/denglu',
			component:denglu
		},
		{
			path:'/zhuce',
			component:zhuce
		},
		{
			path:'/tixe',
			component:tixe
		},
		{
			path:'/pinglun',
			component:pinglun
		},
		{
			path:'/tougao',
			component:tougao
		},
		{
			path:'/xihuan',
			component:xihuan
		},
		{
			path:'/guanzhu',
			component:guanzhu
		}
  ]
})
