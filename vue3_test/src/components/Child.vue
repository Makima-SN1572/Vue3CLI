<template>
    <div class="child">
        <h3>我是Child组件</h3>
        {{ sum }}
    </div>
</template>
  
<script>
import { ref } from 'vue'
export default {
    name: 'Child',
    //setup不能是一个async函数， 因为返回值不再是returm的对象,而是promise,模板看不到return对象中的属性。(后期也可以返回一-个Promise实例,但需要Suspense和异步组件的配合) 
    /*setup() {
        let sum = ref(0)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ sum })
            }, 1000)
        })//注意:一定要在Suspense和defineAsyncComponent异步引入都存在的情况下去做Promise实例对象
    } */

    async setup(){
    let sum = ref(0)
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ sum })
        }, 3000)
    })//注意:一定要在Suspense和defineAsyncComponent异步引入都存在的情况下去做Promise实例对象
    return await p
}

}
</script>
  
<style>
.child {
    background-color: burlywood;
    padding: 10px;
}
</style>