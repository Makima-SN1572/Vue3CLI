<template>
    <div class="child">
        <h3>我是Child组件(子组件)</h3>
        <Sun />
    </div>
</template>
  
<script>
import Sun from './Sun.vue'
export default {
    name: 'Child',
    components: {
        Sun
    },
    //子组件也可以收到上面的数据,不过我们用props更好
    /* setup() {
        let car = inject('car')
        console.log(car);
        return {
            car
        }
    } */
}
</script>
  
<style>
.child {
    background-color: burlywood;
    padding: 10px;
}
</style>