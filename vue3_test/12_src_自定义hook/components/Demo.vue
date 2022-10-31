<template>
    <h1>当前求和为:{{ sum }}</h1>
    <button @click="sum++">点我+1</button>
    <hr>
    <h2>当前点击时鼠标的坐标为:x:{{ point.x }}y:{{ point.y }}</h2>
</template>
  
<script>
import { ref } from "vue";
//引入usePoint,直接里面数据,方法,生命周期直接都不需要在这里面写了,简洁明了,直接用
import usePoint from '../hooks/usePoint'
export default {
    name: "MyDemo",

    setup() {
        //数据
        let sum = ref(0)
        //接到hooks里返回的函数
        let point = usePoint()
        return {
            sum,
            point
        };

    },


};
</script>
  
  
  