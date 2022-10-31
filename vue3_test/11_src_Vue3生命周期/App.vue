<template>
  <button @click="isShowDemo = !isShowDemo">切换显示/隐藏</button>
  <!-- 如果v-if为假就把整个组件干掉 -->
<MyDemo v-if="isShowDemo"/>
</template>

<script>
import { ref } from "vue";
import MyDemo from './components/Demo.vue'
export default {
  name: "App",
  components:{
    MyDemo
  },
  setup(){
    let isShowDemo = ref(true)
    return{
      isShowDemo
    }
  },
}
</script>


