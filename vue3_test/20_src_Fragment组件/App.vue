<template>

  <!-- Fragment,在Vue3里不需要最外面套一个div根标签,内部将那些多个标签全部包含在一个Fragment虚拟元素中 -->
  <!-- 减少标签层级,减少内存占用 -->
  <h3>我是app组件</h3>
  <h3>我是app组件</h3>
  <h3>我是app组件</h3>
</template>

<script>
export default {
  name: 'App',

}
</script>
