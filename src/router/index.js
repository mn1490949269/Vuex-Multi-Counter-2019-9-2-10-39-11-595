import Vue from 'vue'
import Router from 'vue-router'
import welcome from '../Welcome.vue'
import multicounter from '../MultiCounter.vue'
import hello from '../components/hello.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: hello

    },
    {
      path: '/welcome',
      component: welcome
    },
    {
      path: '/welcome/:username',
      component: welcome,
      props:true,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'counter',
          name:'counter',
          component: multicounter
        },
        {
          path: 'todolist', 
          name:'todolist',
          redirect: '/welcome'
        }
      ]
    },
    {
      path: '/counter',
      component: multicounter
    },
    {
      path: '/todolist', 
      redirect: '/' 
    },

  ]
})
