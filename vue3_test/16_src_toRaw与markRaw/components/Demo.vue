<template>
    <h3>当前求和为{{ sum }}</h3>
    <button @click="sum++">点我sum++</button>
    <h4>姓名:{{ name }}</h4>
    <h4>年龄:{{ age }}</h4>
    <h4>薪水:{{ job.j1.salary }}w</h4>
    <span v-show="person.car">展示一台车:{{person.car}}</span>
    <hr>
    <button @click="name += '-'">修改姓名</button>
    <button @click="age++">修改年龄</button>
    <button @click="job.j1.salary++">加薪</button>
    <button @click="showRawPerson">输出最原始的person</button>
    <button @click="addCar">给人增加一台车</button>
    <button @click="person.car.name+='~'" v-show="person.car">改车名</button>
    <button @click="change" v-show="person.car">改价格</button>
</template>
  
<script>
import { ref, reactive, toRefs, toRaw, markRaw } from "vue";
export default {
    name: "MyDemo",
    setup() {
        let sum = ref(0)
        let person = reactive({
            name: 'makima',
            age: 20,
            job: {
                j1: {
                    salary: 20
                }
            }
        })
        //
        function showRawPerson() {
            console.log(person);//这里输出的person是响应式的
            const p = toRaw(person)//来个中转变量p
            p.age++//这里发现输出的对象age一直在增加,但没触发响应式,页面不更新
            console.log(p);//输出p,发现是个对象,而且你触发响应式后,他输出的是改变后的数据 
            /*  //ref
             const sum = toRaw(sum)
             console.log(sum);//vue3.2.13版本toRaw(sum)已经等等于sum */
        }

        function addCar() {
            let car = { name: 'GTR', price: 200 }
            //person.car = car//我们给person身上加上car属性,会被proxy捕获到,形成响应式
            person.car = markRaw(car)//现在car受markRaw影响永远不会触发响应式
            console.log(car);//markRaw输出后是对象

        }
        function change(){
            person.car.price++
            console.log(person.car.price);//这里我们发现在markRaw下,价格是在增加,但是没有响应式
        }


        return {
            person,//这里的person很重要,为了把整个响应式对象交出去,后续的其他数据添加进来就可用这个person去被proxy捕获触发响应式
            ...toRefs(person),//这里数据在setup执行后就不能在继续添加新数据了
            sum,
            showRawPerson,
            addCar,
            change
        };
    },
};
</script>
  
  