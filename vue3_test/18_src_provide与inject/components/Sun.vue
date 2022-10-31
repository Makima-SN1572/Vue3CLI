<template>
    <div class="sun">
        <h3>我是Sun组件(孙组件),收到祖组件传来的数据{{ car.name }}/{{ car.price }}</h3>
    </div>
</template>
  
<script>
import { inject } from 'vue'
export default {
    name: 'Sun',
    setup() {
        let car = inject('car')//接到祖组件传过来的数据命名,从而接到数据,我们顺便给他个变量命名,好调他
        console.log(car);
        return {
            car
        }
    }
}
</script>
  
<style>
.sun {
    background-color: honeydew;
    padding: 10px;
}
</style>