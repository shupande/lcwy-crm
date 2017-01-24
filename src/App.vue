<template>
  <div id="app">
    <hello></hello>
    <!-- <login></login> -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import Hello from './components/Hello'
import Login from './components/login'
// import InfoManage from './components/InfoManage'
// import LeftNav from './components/LeftNav'

export default {
  name: 'app',
  components: {
    Hello,
    Login
  }
}
</script>

<style>
#app,html,body {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  width: 100%;
  margin: 0px;
  background-color: #E5E9F2;
}
.fa{
  margin-right: 10px;
}
</style>
