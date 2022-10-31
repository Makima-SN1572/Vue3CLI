<template>
<MyDemo @hello="showHelloMsg" msg="你好" school="东京大学">
<!-- <span>maki</span> 默认插槽-->
<!-- 命名插槽 -->
<template v-slot:qwe>
  <span>maki</span>
</template>
</MyDemo>
</template>

<script>

import MyDemo from './components/Demo.vue'
export default {
  name: "App",
  components:{
    MyDemo
  },
  setup(){
    function showHelloMsg(){
      alert(`byd你触发了hello自定义事件,收到的参数是${value}`)
    }
    return {
      showHelloMsg
    }
  }
}
</script>


