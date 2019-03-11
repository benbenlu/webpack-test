import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app'
import routers from './router/router.js'

Vue.use(VueRouter)

const routes = new VueRouter({
    routes: routers
})
console.log('router', routes)


new Vue({
    el: '#app',
    router: routes, // router 为路由的写法
    render: h => h(App)
})



// var fn = () => {
//     import('./main1').then(moudle => {
//         console.log('moudle', moudle.a)
//         return module
//     })
// }
// fn()





