<template>
    <div class="itemright">
        <el-table :data="tabledata" stripe style="width: 100%">
            <el-table-column prop="brand_name" label="品牌" width="180" />
            <el-table-column prop="company_name" label="企业" width="180" />
            <el-table-column prop="description" label="描述" />
        </el-table>
    </div>
</template>
<script setup>
import axios from 'axios'
import { onMounted, reactive } from 'vue'
onMounted(async () => {//挂载函数，当组件一挂载完毕就执行该函数获取书籍资源
    getMess()
})
let tabledata = reactive([])
const getMess = () => {
    axios.get('http://127.0.0.1/brand').then((response) => {
        console.log(response.data)
        let data = response.data
        data.forEach(function (item) {
            tabledata.push(item)
            console.log(item)
        })

    }).catch(err => {
        console.log('获取数据失败' + err)
    })
}
</script>

<style>
.itemright {
    background-color: #fff;
    margin-left: 10px;
    height: 1200px;
    width: 1000px;
    font-size: 20px;
}
</style>