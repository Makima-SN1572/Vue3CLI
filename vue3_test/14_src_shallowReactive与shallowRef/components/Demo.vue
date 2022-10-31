<template>
    <h3>当前x值是:{{x.y}}</h3>
    <button @click="x={y:888}">点我替换x</button><!-- 这里是x的响应式,不是里面y的响应式 -->
    <!-- <button @click="x.y++">点我x++</button>  shallowRef不能修改对象数据,不适合这种场景-->
    <h4>{{ person }}</h4>
    <h4>姓名:{{ name }}</h4>
    <h4>年龄:{{ age }}</h4>
    <h4>薪水:{{ job.j1.salary }}w</h4>
    <button @click="name += '-'">修改姓名</button>
    <button @click="age++">修改年龄</button>
    <button @click="job.j1.salary++">加薪</button>
</template>
  
<script>
//引入shallowReactive,shallowRef,浅层次
import { ref, reactive, toRef, toRefs,shallowReactive,shallowRef } from "vue";
export default {
    name: "MyDemo",
    setup() {
        //这里用shallowReactive,name,age是响应式的,j1属于第二层,就不会处理,只考虑对象类型里面第一层的响应式
        //let person = shallowReactive({
        let person = reactive({
            name: 'makima',
            age: 20,
            job: {
                j1: {
                    salary: 20
                }
            }
        })
        //let x = ref(0)
        let x = shallowRef({
            y:0
        })//你传基本数据类型,ref和shallowRef没有区别,但是当你传入的是对象类型的数据时,shallowRef不会去处理对象数据类型的响应式,所以你这里写对象是不会触发响应式的,ref的话会把对象交给reactive,然后触发响应式
        console.log(x);//shallowRef,输出x发现是ref对象里面value是 Object不是proxy(ref是这个),所以不会触发响应式
        return {
            person,
            ...toRefs(person),
            x
        };
    },
};
</script>
  
  