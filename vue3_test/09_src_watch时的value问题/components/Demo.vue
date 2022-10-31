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
//Vue3要引入computed
import { reactive, ref, watch } from "vue";

export default {
    name: "MyDemo",
    
    setup() {
        //数据
        let sum = ref(0)
        let msg = ref('你好')
        let person = ref({
            name:'makima',
            age:20,
            job:{
                j1:{
                    salary:20
                }
            }
        })

        //ref下的基本数据类型不需要.value去监视,不认你监视的就是那个0,所以监听:监听的是实现响应式的代理结构，而不是数据源本身
        watch(sum,(newValue,oldValue)=>{
            console.log('sum监视到了',newValue,oldValue);
        })
        //因为外层包了一个ref 监视基本类型.value是一个值 而监视对象（或数组）类型 .value是代理函数
        //这里除非你整个对象存储地址发生变化他才能监视到,而你只是修改对象下的子对象数据的话,他监视不到
        watch(person,(newValue,oldValue)=>{
            console.log('person监视到了',newValue,oldValue);
        })
        //解决办法加.value  我们知道这里person.value是proxy对象,就是ref就把他交给了reactive,所以我们监视的是一个reactive所定义的数据,自动深层监视
        /* watch(person.value,(newValue,oldValue)=>{
            console.log('person监视到了',newValue,oldValue);
        }) */

        //解决方法2,开启深度监视,这里是我们监视的是ref所定义的数据
        watch(person,(newValue,oldValue)=>{
            console.log('person监视到了',newValue,oldValue);
        },{deep:true})
        return {
            sum,
            msg,
            person
        };

    },
};
</script>
  
  
  