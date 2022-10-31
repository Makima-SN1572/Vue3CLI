<template>
    <h1>个人信息</h1>
    <h2>姓名:{{ person.name }}</h2>
    <h2>年龄:{{ person.age }}</h2>
    <button @click="test">测试触发demo组件的hello自定义事件</button>
</template>
  
<script>
import { reactive } from "vue";

export default {
    //这里所有的警告都不会影响代码正常运行
    name: "MyDemo",
    //setup执行会在beforeCreate之前,this是undefined
    /* beforeCreate() {
        console.log('----beforeCreate----');
    }, */
    //setup有两个参数,第一个是props,第二个是context
    props: ['msg', 'school'],//这里不接收会警告,要全部接收才能取消警报,而且你会发现他给你弄到了proxy对象里,那么就说明可以实现响应式

    emits:['hello'],//Vue3要用emits去接受hello事件,不然会警告
    setup(props, context) {
        //console.log('----setup----',props);
        //console.log('----setup----', context.attrs);//这里上方注释props接收attrs就可以收到数据,你要是只声明一个,那么他就会接收那个没声明的,相当于Vue2中的$attrs,在vue2中你不接收props,那么数据就会被放在vc的$attrs下,可以让你拿到里面的数据
       // console.log('----setup----', context.emit);//触发自定义事件
       console.log('----setup----', context.slots);//插槽:默认插槽会输出default: ƒ,命名插槽会输出qwe: ƒ你命名的插槽名字,总的来说就是收到了插槽内容

        let person = reactive({
            name: "makima",
            age: 20,
        });
        function test() {
            context.emit('hello', 666)
        }

        return {
            person,
            test
        };
    },
};
</script>
  
  
  