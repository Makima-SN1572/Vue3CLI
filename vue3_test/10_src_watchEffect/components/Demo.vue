<template>
    <h1>当前求和为:{{sum}}</h1>
    <button @click="sum++">点我+1</button>
    <br>
    <h2>当前信息为:{{msg}}</h2>
    <button @click="msg+='!'">修改信息</button>
    <br>
    <h4>姓名:{{person.name}}</h4>
    <h4>年龄:{{person.age}}</h4>
    <h4>薪水:{{person.job.j1.salary}}w</h4>
    <button @click="person.name+='-'">修改姓名</button>
    <button @click="person.age++">修改年龄</button>
    <button @click="person.job.j1.salary++">加薪</button>
</template>
  
<script>
//引入watchEffect
import { computed, reactive, ref, watch,watchEffect } from "vue";

export default {
    name: "MyDemo",
    
    setup() {
        //数据
        let sum = ref(0)
        let msg = ref('你好')
        let person = reactive({
            name:'makima',
            age:20,
            job:{
                j1:{
                    salary:20
                }
            }
        })
        //监视
        /* watch(sum,(newValue,oldValue)=>{
            console.log('sum监视到了',newValue,oldValue);
        }{immediate:true}) */

        //watchEffect  不需要说明他监视谁,上来就写回调函数,
        watchEffect(()=>{
            //发现上来就默认immediate:true
            console.log('watchEffect所指定的回调执行了');
            //watchEffect你回调函数里用谁他就监视谁,还能够分别多层对象
            //watchEffect有点像computed,都是所依赖的数据发生变化时调用,但watchEffect更重视过程(回调函数的函数体)不需要返回值
            //computed注重的是计算出来的值(回调函数返回的值),所以必须要写返回值
            const x1 = sum.value
            const x2 = person.job.j1.salary
        })


        return {
            sum,
            msg,
            person
        };

    },
};
</script>
  
  
  