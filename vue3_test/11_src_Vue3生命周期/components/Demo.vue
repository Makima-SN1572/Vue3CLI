<template>
    <h1>当前求和为:{{ sum }}</h1>
    <button @click="sum++">点我+1</button>
</template>
  
<script>
//真几把麻烦,组合式api需要引入,所以组合式api的生命周期需要引入
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from "vue";

export default {
    name: "MyDemo",

    setup() {
        //数据
        let sum = ref(0)

        //通过组合式api(组合式api就是setup里面的玩意)的形式去使用生命周期,就是在setup里面写生命周期
        //注意beforeCreate===>setup(),created===>setup()这俩生命周期都变成setup()了,在里面写不了,你写完setup就已经创建了
        //这里不要怀疑setup在beforeCreate之前创建,那个beforeCreate是配置项的beforeCreate,不是这里的
        console.log('-------setup----------');//beforeCreate,created
        onBeforeMount(() => {
            console.log('---------onBeforeMount----------');
        }),
            onMounted(() => {
                console.log('--------onMounted-----------');
            }),
            onBeforeUpdate(() => {
                console.log('--------onBeforeUpdate-----------');
            }),
            onUpdated(() => {
                console.log('---------onUpdated----------');
            }),
            onBeforeUnmount(() => {
                console.log('---------onBeforeUnmount----------');
            }),
            onUnmounted(() => {
                console.log('----------onUnmounted---------');
            })



        return {
            sum,
        };

    },
    //通过配置项(我们写的name,setup,还有下面所有的生命周期都是配置项的形式)的形式使用生命周期
    //挂载流程
    //#region 
    beforeCreate() {
        console.log("--------beforeCreate----------");
    },
    created() {
        console.log("--------created----------");
    },
    beforeMount() {
        console.log("--------beforeMount----------");
    },
    mounted() {
        console.log("--------mounted----------");
    },
    //更新流程
    beforeUpdate() {
        console.log("--------beforeUpdate----------");
    },
    updated() {
        console.log("--------updated----------");
    },
    //卸载流程
    beforeUnmount() {
        console.log("--------beforeUnmount----------");
    },
    unmounted() {
        console.log("--------unmounted----------");
    },
    //#endregion


    //两个都解锁我们就会发现组合式api里的生命周期快于配置项生命周期,不推荐混用

};
</script>
  
  
  