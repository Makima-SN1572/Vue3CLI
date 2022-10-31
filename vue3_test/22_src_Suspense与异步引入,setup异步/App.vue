<template>
  <div class="app">
    <h3>我是app组件</h3>
    <Suspense>
      <!-- Suspense里要写两个插槽(default,fallback)名字不能改 -->
      <!-- 这里第一个是你正常所有组件显示出来的样子, -->
      <template v-slot:default>
        <Child />
      </template>
      <!-- 第二个是你有组件加载没出来时显示的样子 -->
      <template v-slot:fallback>
        <h3>加载中....</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
//import Child from "./components/Child.vue";静态引入,俩组件一起到页面出来(低网速)
//引入defineAsyncComponent:定义一个异步组件
import { defineAsyncComponent } from "vue";
const Child = defineAsyncComponent(() => import('./components/Child.vue'))//动态/异步引入,俩组件app组件先出来页面展示,child后出来(低网速)
export default {
  name: 'App',
  components: {
    Child
  },
}
</script>

<style>
.app {
  background-color: aqua;
  padding: 10px;
}
</style>