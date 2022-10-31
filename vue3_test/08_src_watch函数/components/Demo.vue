<template>
    <h1>当前求和为:{{sum}}</h1>
    <button @click="sum++">点我+1</button>
    <br>
    <h2>当前信息为:{{msg}}</h2>
    <button @click="msg+='!'">修改信息</button>
    <br>
    <h4>姓名:{{person.name}}</h4>
    <h4>年龄:{{person.age}}</h4>
    <h4>薪水:{{person.job.j1.salary}}w</h4>
    <button @click="person.name+='-'">修改姓名</button>
    <button @click="person.age++">修改年龄</button>
    <button @click="person.job.j1.salary++">加薪</button>
</template>
  
<script>
//Vue3要引入computed
import { reactive, ref, watch } from "vue";

export default {
    name: "MyDemo",
    //vue2的watch
     //普通写法
    /*watch:{
        sum(newValue,oldValue){
            console.log('sum变化',newValue,oldValue);
        }
        //完整写法
        sum:{
            immediate:true,
            deep:true,
            handler(newValue,oldValue){
                console.log('sum变化',newValue,oldValue);
            }
        }
    }, */
    
    setup() {
        //数据
        let sum = ref(0)
        let msg = ref('你好')
        let person = reactive({
            name:'makima',
            age:20,
            job:{
                j1:{
                    salary:20
                }
            }
        })
        //监视,监视是一种行为,不需要什么let去设置变量
        //watch能传三个函数,第一个是监视对象,第二个是监视回调,第三个是监视的配置
       
        //情况一:监视ref所指定的响应式数据
        /*  watch(sum,(newValue,oldValue)=>{
            console.log('sum变化',newValue,oldValue);
        },{immediate:true})  */

        //情况二:监视ref所定义对的多个响应式数据
        //第一种写法重复写watch,vue3可以这么写
        /* watch(sum,(newValue,oldValue)=>{
            console.log('sum变化',newValue,oldValue);
        },{immediate:true})
        watch(msg,(newValue,oldValue)=>{
            console.log('msg变化',newValue,oldValue);
        }) */
        //第二种数组写法
        /* watch([sum,msg],(newValue,oldValue)=>{
            console.log('sum或msg变化',newValue,oldValue);
        },{immediate:true}) */

        /* 情况三:监视reactive所定义对的一个响应式数据的全部属性  
        1.注意:(监视的是对象时)此处无法准确的获取oldValue,值和newvalue一样,实在想用oldValue就把它放在外面不要包在person里面
        2.注意:强制开启深度监视(deep配置无效deep:false没用),无论你套多少层都能监视到 */
        //监视的是对象person
        /* watch(person,(newValue,oldValue)=>{
            console.log('person变化',newValue,oldValue);
        },{deep:false}) */

        //情况四:监视reactive所定义对的一个响应式数据的某一个指定属性,要写成一个函数,函数返回值是你要监视的属性
        //这里你监视的就是一个字符串
        /* watch(()=>person.name,(newValue,oldValue)=>{
            console.log('person.name变化',newValue,oldValue);
        }) */

        //情况五:监视reactive所定义对的一个响应式数据的某些属性
        /* watch([()=>person.name,()=>person.age],(newValue,oldValue)=>{
            console.log('person.name或person.age变化',newValue,oldValue);
        }) */

       /*  //特殊情况,监视对象下的深层数据  这里deep:true生效了,deep不开监视不到
       //监视的是对象,oldvalue失效
        watch(()=>person.job,(newValue,oldValue)=>{
            console.log('person.name变化',newValue,oldValue);
        },{deep:true})//此处由于监事的是reactive素定义的对象中的某个属性,所以deep配置有效 */
        return {
            sum,
            msg,
            person
        };

    },
};
</script>
  
  
  