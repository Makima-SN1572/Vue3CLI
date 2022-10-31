<template>
  <h1>个人信息</h1>
  <!-- Vue3在解析你的插值语法时,发现是ref对象,会给你加上.value你不能自己加否则就是两个.value,        所以这里的name是name.value -->
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>工作:{{ job.type }}</h2>
  <h2>薪水:{{ job.salary }}</h2>
  <button @click="changeInfo">修改信息</button>
</template>

<script>
//引入ref
import { ref } from "vue";

export default {
  name: "App",
  setup() {
    //数据
    //当我们没有把数据交给ref函数时,就会发现我们命名的数据就是一个字符串,Vue不会认这种数据,所以渲染不出来
    let name = ref("makima");
    let age = ref(20);
    let job=ref({
      type:'前端',
      salary:'30k'
    })

    //方法
    function changeInfo() {
      /* name = "moko";
      age = 21; */

      console.log(name, age); //在没有用ref时,这里我们在控制台发现数据已经改了但页面没变,
      //当我们注释上方的数据打印出来发现他们是refimpl(分别是引用ref和实现impl)的对象里的东西,整个对象叫[引用实现的实例对象],发现数据在value里   get set (数据劫持)实现响应式

      //正确的修改数据方式,ref  基础类型要用.value
      name.value = "moko";
      age.value = 21;
      //对象里type,salary属性是响应式,我们拿到ref里的对象,对象里面第一层不需要.value   对象用的是Proxy{}不是靠数据劫持实现响应式
      job.value.type = '警察'
      job.value.salary = '60k'

    }
    return {
      name,
      age,
      job,
      changeInfo,
    };
  },
};
</script>


