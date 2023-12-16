<template>
    <div class="itemright">
        <upload-excel-component :on-success="handleSuccess" :before-upload="beforeUpload" />
        <el-table :data="tabledata" stripe style="width: 100%">
            <el-table-column prop="brand_name" label="品牌" width="180" />
            <el-table-column prop="company_name" label="企业" width="180" />
            <el-table-column prop="description" label="描述" />
        </el-table>
    </div>
</template>

<script>
import UploadExcelComponent from './UploadExcel/index.vue'
import { toRaw } from 'vue'
export default {
    components: { UploadExcelComponent },
    data() {
        return {
            tabledata: []
        }
    },
    methods: {
        beforeUpload(file) {
            const isLt1M = file.size / 1024 / 1024 < 1  // 判断传入的数据是否在1M以内  返回布尔值
            if (isLt1M) {
                return true
            }
            this.$message({
                message: '文件大于1M 请重新上传',
                type: 'warning'
            })
            return false
        }, // 你可以在上传之前做一些自己的特殊判断，如判断文件的大小是否大于 1 兆？若大于 1 兆则停止解析并提示错误信息。
        handleSuccess({ results, header }) {

            console.log('header', header)

            this.tabledata.push(...results)

            console.log(tabledata)
        }// 解析成功时候会触发的回调函数，它会返回表格的表头和内容。
    }
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
  