<template>
  <transition>
    <router-view></router-view>
  </transition>
</template>

<style>
body{
	margin: 0px;
	font-family: 微软雅黑;
}
#app{
  position: absolute;
  top:0px;
  bottom: 0px;
  width: 100px;
}
.el-pagination{
	padding: 0px;
	margin-top: 10px;
}
.el-textarea {
    display:block ;
}
</style>
