<template>
  <input type="text" v-model="keyWord">
  <h3>{{ keyWord }}</h3>
</template>

<script>
//customRef我们借着customRef自定义ref
import { ref, customRef } from "vue";

export default {
  name: "App",

  setup() {
    //let keyWord = ref('hello')//使用vue提供的ref
    //自定义一个ref,名为myRef,收到下面传来的数据
    //delay是我们传进来要求的时间延迟,正常传就value够了
    function myRef(value, delay) {
      let timer  //设置一个timer让他去实现防抖
      //customRef里面的函数()=>{}必须要返回一个对象
      return customRef((track, trigger) => {
        //必须要返回一个对象
        return {
          //你的hello作为value被传了进来,同时当你读取取里面的数据时,就会调用get,当你通过页面v-model使页面发生变化时,就会调用set
          //get要有返回值,返回的是value

          //get里面的值是初始化的value
          get() {
            console.log(`有人从myRef读取数据,返回${value}`);//我们在页面上两次读取了myref
            track()//(第三步)通知vue追踪value的变化,告诉get这个value是有用的,track一定要写在返回值前,他的作用是追踪value的改变,不追踪或者在返回值下面就追踪不到数据的改变,下面返回值就不会变化
            return value//初始展示页面这里是第一步,把你初始化的数据读取到页面上,但是修改页面数据是(第四步)
          },
          //set里面的value是你改的值,是新的
          set(newValue) {
            console.log(`有人从myRef修改数据,返回${newValue}`);
            //value = newValue//(第一步)我们让修改的value覆盖初始化的value
            //trigger()//(第二步)通知vue去重新解析模板,一解析就会去get读数据,此时get里面的数据是我们覆盖后的新数据,页面就会把修改的值编入页面

            clearTimeout(timer)//每次我们修改数据就清除上一次的定时器 防抖
            //要求:让下方的数据等一秒再改变(这就是自定义的体现,ref做不到)
            //让timer=定时器使上面的timer操作生效
            timer = setTimeout(() => {
              value = newValue
              trigger()
            }, delay)
          }
        }
      })

    }
    let keyWord = myRef('hello', 1000)//使用程序员自定义提供的ref,1000是我们要实现的要求延迟时间,正常不写,实在不懂看尚硅谷p162最后几分钟
    return {
      keyWord
    }
  },
}
</script>


