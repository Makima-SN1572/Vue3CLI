//这里的代码是hook把setup函数中使用的组合式api进行了封装,让各个组件可以使用里面返回的函数
import { reactive, onMounted, onBeforeUnmount } from "vue";
export default function () {
    //实现鼠标"打点"的数据
    let point = reactive({
        x: 0,
        y: 0
    })
    //实现鼠标"打点"的方法
    function savePoint(event) {

        point.x = event.pageX
        point.y = event.pageY
        console.log(event.pageX, event.pageY);
    }
    //实现鼠标"打点"的生命周期
    onMounted(() => {

        window.addEventListener('click', savePoint)
    })
    onBeforeUnmount(() => {
        window.removeEventListener('click', savePoint)
    })
    //一定要有返回
    return point
}
