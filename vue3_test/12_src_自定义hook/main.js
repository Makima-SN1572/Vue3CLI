//引入的不再是Vue构造函数(构造函数首字母大写,还要New调用一个vm),引入的是一个名为createApp的工厂函数(无需通过new调用)
import { createApp } from 'vue'
import App from './App.vue'

//代码解析
//createApp(App).mount('#app')
//创建应用实例对象-app(类似于Vue2中的vm,但app比vm更"轻"")
const app = createApp(App)
//挂载
app.mount('#app')

//之前Vue2的写法,Vue3并不兼容
/* const vm = new Vue({
    render:h => h(App)
})
vm.$mount('#app') */

