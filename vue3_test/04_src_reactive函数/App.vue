<template>
  <h1>个人信息</h1>
  <!-- Vue3在解析你的插值语法时,发现是ref对象,会给你加上.value你不能自己加否则就是两个.value,        所以这里的name是name.value -->
  <!-- <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>工作:{{ job.type }}</h2>
  <h2>薪水:{{ job.salary }}</h2>
  <h2>测试reactive拿数据:{{ job.a.b.c }}</h2>
  <h2>测试reactive拿数组数据:{{ hobby }}</h2>
  <button @click="changeInfo">修改信息</button> -->
  <!-- person -->
  <h2>姓名:{{ person.name }}</h2>
  <h2>年龄:{{ person.age }}</h2>
  <h2>工作:{{ person.job.type }}</h2>
  <h2>薪水:{{ person.job.salary }}</h2>
  <h2>测试reactive拿数据:{{ person.job.a.b.c }}</h2>
  <h2>测试reactive拿数组数据:{{ person.hobby }}</h2>
  <button @click="changeInfo">修改信息</button>
</template>

<script>
//引入ref
import { ref, reactive } from "vue";

export default {
  name: "App",
  setup() {
    //数据
    //当我们没有把数据交给ref函数时,就会发现我们命名的数据就是一个字符串,Vue不会认这种数据,所以渲染不出来
    //reactive只能用于对象,他处理不了基本类型
    /* let name = ref("makima");
    let age = ref(20); */
    //用reactive定义响应式对象,会把你的对象Obiect变成Proxy对象实现响应式
    /* let job=reactive({
      type:'前端',
      salary:'30k',
      a:{
        b:{
          c:6666
        }
      }
    }) */
    //let hobby = reactive(["喝酒", "烫头", "艹批"]);

    //因为我们的reactive处理不了基本类型的对象,所以我们换种写法,data写法
       //我们把person交给reactive,数据完全写在这个对象里
    let person =reactive( {
      name: "makima",
      age: 20,
      job: {
        type: "前端",
        salary: "30k",
        a: {
          b: {
            c: 6666,
          },
        },
      },
      hobby: ["喝酒", "烫头", "艹批"],
    });
 


    //方法
    function changeInfo() {
      //console.log(name, age);
      //这里用reactive,不需要.value,变成Proxy对象
      //console.log(job);

      //正确的修改数据方式,ref  基础类型要用.value
      /* name.value = "moko";
      age.value = 21; */
      //这里我们就发现reactive下的对象不需要.value就可以拿到数据
      /* job.type = "警察";
      job.salary = "60k";
      //reactive处理对象是深层次的,你套几层对象他都可以找到还不需要.value
      job.a.b.c = 99;
      //读取和修改都可以用索引去改
      hobby[0] = "睡觉"; */



      /////////////////////////////////////person
      person.name = "moko";
      person.age = 21;
      person.job.type = "警察"
      person.job.salary = "60k"
      person.job.a.b.c = 99;
      person.hobby[0]='睡觉'



    }
    return {
      person,
      changeInfo,
    };
  },
};
</script>


