<template>
  <div class="app">
    <h3>我是app组件(祖组件),{{name}}/{{price}}</h3>
    <Child/>
  </div>
</template>

<script>
import { reactive, toRefs ,provide} from "vue";
import Child from "./components/Child.vue";
export default {
name:'App',
components:{
  Child
},
setup() {
  let car = reactive({
    name:'GTR',
    price:'1000w'
  }) 
  provide('car',car)//provide是祖组件给孙组件(后代组件,在他之下所有组件都可以收到)传数据,两个参数,第一个是给你传过去的参数取个名字,后面孙组件接收就靠这名字了,第二个是你传过去的数据
  return {
    ...toRefs(car)
  }
}
}
</script>

<style>
.app{
  background-color: aqua;
  padding: 10px;
}
</style>