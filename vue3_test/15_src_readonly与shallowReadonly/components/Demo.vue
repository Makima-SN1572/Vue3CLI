<template>
    <h3>当前求和为{{sum}}</h3>
    <button @click="sum++">点我sum++</button>
    <h4>姓名:{{ name }}</h4>
    <h4>年龄:{{ age }}</h4>
    <h4>薪水:{{ job.j1.salary }}w</h4>
    <button @click="name += '-'">修改姓名</button>
    <button @click="age++">修改年龄</button>
    <button @click="job.j1.salary++">加薪</button>
</template>
  
<script>
//引入shallowReactive,shallowRef,浅层次
import { ref, reactive, toRefs ,readonly,shallowReadonly} from "vue";
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

        //person = readonly(person)//这里我们用readonly把上面的person里面的数据保护起来,不能修改,只能读取,同时我们命名一个person,他覆盖了上面的person
        //person = shallowReadonly(person)//这里我们用shallowReadonly把上面的person里面的第一层数据保护起来,不能修改,只能读取,,但是第二层第三层...就可以触发响应式,我们可以修改salary,同时我们命名一个person,他覆盖了上面的person

        //shallowReadonly也可以对ref数据进行只读限制
        sum = readonly(sum)
        sum = shallowReadonly(sum)//其实没必要用shallowReadonly,ref是第一层的数据,没有第二层

        return {
            ...toRefs(person),
            sum
        };
    },
};
</script>
  
  