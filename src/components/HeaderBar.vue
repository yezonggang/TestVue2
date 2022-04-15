<template>
  <header class="headerBar">
    <div class="l-content">
      <el-button @click="handMenu" plain icon="el-icon-menu" size="mini">
      </el-button>
    </div>

    <div class="r-content">
      <el-dropdown trigger="click" szie="mini">
        <span>
          <img :src="userImg" class="user" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderBar',
  data() {
    return {
      userImg: require('../assets/logo.png')
    }
  },
  methods: {
    handMenu() {
      this.$store.commit('collapseMenu')
    }
  }
}
</script>

</script>
<style lang="less" scoped>
header {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}
.l-content {
  display: flex;
  align-content: center;
  .el-button {
    margin-right: 20px;
  }
}
.r-content {
  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>