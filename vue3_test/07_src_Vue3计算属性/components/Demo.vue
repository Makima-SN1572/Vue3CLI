<template>
    <h1>个人信息</h1>
    性:<input type="text" v-model="person.firstName">
    <br>
    名:<input type="text" v-model="person.lastName">
    <br>
    <!--     <span>全名:{{fullName}}</span>vue2计算属性与vue3单独把fullname拿出来做计算属性写法 -->
    <span>全名:{{ person.fullName }}</span><!-- vue3我们把fullname放在person里面作为一个属性 -->
    全名:<input type="text" v-model="person.fullName">
</template>
  
<script>
//Vue3要引入computed
import { reactive, computed } from "vue";

export default {
    name: "MyDemo",
    //Vue3可以用Vue2一样的计算属性
    /* computed:{
        fullName(){
            return this.person.firstName +this.person.lastName
        }
    }, */
    setup() {
        let person = reactive({
            firstName: 'ma',
            lastName: 'kima'
        });
        //Vue3的计算属性没有考虑计算属性被修改的情况(只读)
        /* person.fullName = computed(()=>{
            return person.firstName+person.lastName
        }) */
        //Vue3的计算属性完整写法(可读可写)
        person.fullName = computed({
            get() {
                return person.firstName + person.lastName
            },
            set(value) {
                const nameArr = value
                person.firstName = nameArr[0]
                person.lastName= nameArr[1]
            }
        })
        //Vue3的计算属性不完整写法
        /* let fullName = computed(()=>{
            return person.firstName+person.lastName
        }) */
        //Vue3的计算属性完整写法
        /* let fullName = computed({
            get() {
                return person.firstName + person.lastName
            },
            set(value) {
                const nameArr = value
                person.firstName = nameArr[0]
                person.lastName= nameArr[1]
            }
        }) */
        return {
            person,
            /* fullName fullname在person外面写法需要返回*/
        };

    },
};
</script>
  
  
  