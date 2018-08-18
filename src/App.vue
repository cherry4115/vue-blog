<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home888</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <el-container>
      <el-aside width="250px" class="aside">
        <blog-frame ref="BlogFrame"></blog-frame>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import BlogFrame from './components/BlogFrame.vue'

export default {
  name: 'App',

  components: {
    BlogFrame
  }
};
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;

  .aside {
    background-color: #202020;
    height: 100vh;
  }
}
</style>
