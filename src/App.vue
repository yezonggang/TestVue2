<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// 这个App.vue文件用，入口是/src/views/Main.vue
export default {
  name: 'App'
}
</script>

<style >
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  height: 100vh;
}
</style>
