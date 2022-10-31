<template>
  <h1>个人信息</h1>
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>性别:{{ sex }}</h2>
  <!-- 如果Vue2和Vue3有数据相同则以Vue3为准 -->
  <h4>Vue2与Vue3相同数据是{{mix}}优先</h4>
  <button @click="sayHello">说话(Vue3所配置的---sayHello)</button>
  <br />
  <button @click="sayWelcome">说话(Vue2所配置的---sayWelcome)</button>
  <br />
  <button @click="test1">测试一下在Vue2配置中读取Vue3的数据及方法</button>
  <br />
  <button @click="test2">
    测试一下在Vue3的setup配置中读取Vue2的数据及方法
  </button>
</template>

<script>
//import { h } from 'vue';引入h
export default {
  name: "App",
  //vue3里可以写vue2的数据,方法的样式
  data() {
    return {
      sex: "女",
      mix: "Vue2",
    };
  },
  methods: {
    sayWelcome() {
      alert("你好");
    },
    //此处可以发现Vue2读到Vue3的数据及方法
    test1() {
      console.log(this.sex);
      console.log(this.name);
      console.log(this.age);
      console.log(this.sayWelcome);
      console.log(this.sayHello);
      console.log(this.mix);//这里就发现mix是读取的Vue3中的数据优先

    },
  },
  //此处只是测试setup,展示不考虑响应式
  //setup前面不能写async
  setup() {
    //数据
    let name = "makima";
    let age = 20;
    let mix = "Vue3";
    //方法
    function sayHello() {
      alert(`我叫${name},我${age}岁,你好啊`);
    }
    //此处可以发现Vue3读不到Vue2的数据及方法,为undefined,
    function test2() {
      console.log(this.name);
      console.log(this.age);
      console.log(this.sayHello);
      console.log(this.mix);
      console.log(this.sex);
      console.log(this.sayWelcome);
    }

    //setup return 返回一个对象(常用)数据,方法都在里面,在模板中直接使用
    return {
      name,
      age,
      sayHello,
      test2,
      mix
    };

    //setup第二个功能返回一个渲染函数
    //第一个return是返回他后面整个的东西,第二个return是返回h调用的结果
    // return ()=>{return h('h1','moko')}
  },
};
</script>


