<template>
  <el-container style="height: 100%">
    <common-aside width="auto"></common-aside>
    <el-container>
      <el-header style="padding: 0">
        <header-bar></header-bar>
      </el-header>
      <common-tag></common-tag>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import commonAside from '../../components/SideBar'
import headerBar from '../../components/HeaderBar'
import CommonTag from '../../components/CommonTag'

export default {
  name: 'Home',
  components: {
    commonAside,
    headerBar,
    CommonTag
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
