<template>
  <div class="itemmain">
    <div class="itemleft">
      <el-row class="tac">
        <el-col :span="24">
          <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" default-active="2"
            text-color="#fff" @open="handleOpen" @close="handleClose">
            <el-menu-item index="1">
              <el-icon><icon-menu /></el-icon>
              <router-link to="/welcome">欢迎</router-link>
            </el-menu-item>
            <el-menu-item index="2">
              <el-icon><icon-menu /></el-icon>
              <router-link to="/manage">上传excel文件来获取数据源</router-link>
            </el-menu-item>
            <el-menu-item index="3">
              <el-icon><icon-menu /></el-icon>
              <router-link to="/table">连接数据库获取数据源</router-link>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
<style scoped>
.itemmain {
  height: 1200px;
  width: 1300px;
  display: flex
}

.itemleft {
  background-color: #545c64;
  margin-left: 10px;
  height: 1200px;
  width: 300px;
  font-size: 20px;
}

a {
  color: #FFFFFF;
  text-decoration: none;
  font-size: 16px
}
</style>