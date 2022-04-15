<template>
  <el-container>
    <el-aside width="200px">
      <common-aside></common-aside>
    </el-aside>
    <el-container>
      <el-header>
        <header-bar></header-bar>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import commonAside from '../components/SideBar'
import headerBar from '../components/HeaderBar.vue'
export default {
  name: 'Home',
  components: {
    commonAside,
    headerBar
  },
  data() {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.el-header {
  background-color: #333;
  height: 100px;
}
.el-main {
  padding: 0;
}
</style>
