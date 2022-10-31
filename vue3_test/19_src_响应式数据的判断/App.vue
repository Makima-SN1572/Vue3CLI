<template>
    <h3>我是app组件(祖组件),{{name}}/{{price}}</h3>
</template>

<script>
import { reactive, toRefs ,ref,readonly,isRef,isReactive,isReadonly,isProxy} from "vue";
export default {
name:'App',

setup() {
  let car = reactive({
    name:'GTR',
    price:'1000w'
  }) 
  let sum = ref(0)
  let car2 = readonly(car)

  console.log(isRef(sum));//isRef判断sum是不是ref类型的
  console.log(isReactive(car));//isReactive判断car是不是reactive类型的
  console.log(isReadonly(car2));//isReadonly判断car2是不是Readonly类型的
  console.log(isProxy(car));//isProxy判断car是不是Proxy代理的对象
  console.log(isProxy(car2));//isProxy判断car是不是Proxy代理的对象,car虽然只读,但其返回的还是Proxy对象
  console.log(isProxy(sum));//sum被ref返回是Ref对象不是Proxy
  console.log(sum);
  return {
    ...toRefs(car),
    sum,
    car2
  }
}
}
</script>
