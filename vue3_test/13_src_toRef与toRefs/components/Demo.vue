<template>
    <h4>{{ person }}</h4>
    <h4>姓名:{{ name }}</h4>
    <h4>年龄:{{ age }}</h4>
    <h4>薪水:{{ job.j1.salary }}w</h4>
    <button @click="name += '-'">修改姓名</button>
    <button @click="age++">修改年龄</button>
    <button @click="job.j1.salary++">加薪</button>
</template>
  
<script>
//引入toRef,toRefs
import { ref, reactive, toRef, toRefs } from "vue";

export default {
    name: "MyDemo",

    setup() {

        let person = reactive({
            name: 'makima',
            age: 20,
            job: {
                j1: {
                    salary: 20
                }
            }
        })

        //const name1 = person.name//这里就相当于干燥的写了一个简单字符串,不会有任何响应式
        //console.log('!!!!!!',name1);
        //toRef作用就是把一个不是ref的东西转成ref的东西,第一个参数是你想用那个对象,第二个是你要这个对象里什么属性
        //const name2 = toRef(person,'name')
        //console.log(name2);//这里我们就会发现返回的是ref对象,能响应式的数据,里面的value就是person里面的name,他偷偷地利用get指向原数据里的name,他是引用
        //toRef作用:创建一个ref对象(把不是ref的东西转成ref的东西),其value值指向另一个对象(第一个参数)中的某个属性(第两个参数)

        //上面toref只能处理一个属性,torefs可以直接处理你用的对象里面所有的属性,所以他只需要一个参数,就是你用的那个属性

        const x = toRefs(person)
        console.log("!!!", x);
        return {
            person,
            //我们这里就只是给name,age,salary属性赋值,简单的给她们附上字符串,后面跟的值就是简单的字符串和直接写'makima'没有任何区别,不会触发响应式的,所以我们返回的是在这里的设置变量的name,而不是setup里的name
            //name:person.name,//person.name就是'makima'
            //age:person.age,
            //salary:person.job.j1.salary


            //所以要这么写  toRef  
            //name:toRef(person,'name'),
            //age:toRef(person,'age'),
            //salary:toRef(person.job.j1,'salary'),//深层对象啊大哥,一直取到你要的数据那个对象就行了
            //toRefs
            ...toRefs(person)
            //...是es6语法把对象拆散了交出去,深层对象就可以去找数据了
            //job.j1.salary插值语法要这么去找salary


            //来个绝绝子写法什么toRef滚一边
            //name:ref(person.name),
            //age:ref(person.age),
            //salary:ref(person.job.j1.salary)
            //这里你会发现wc好屌,直接实现了响应式
            //然后我们就会发现<h4>{{person}}</h4>根本不会改变,也就是说响应式的根本不是person里面的数据,是你自己ref的初始化数据,为什么因为你就是把person.name这个字符串打包成了一个新的ref,你点击修改的是这里面的ref,原数据根本没变,你响应式了个寂寞   ref是复制,toref是引用



        };

    },
};
</script>
  
  
  
  