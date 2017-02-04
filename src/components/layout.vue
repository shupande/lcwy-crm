<template>
    <el-row class="tac">
        <div class="p-layout-topbar clearfix">
            <div class="p-layout-name">
                <span class="full"><i class="fa fa-windows fa-2x" aria-hidden="true"></i>联鑫创展客户管理系统<small>&nbsp by shupan</small></span>
            </div>
            <!-- <div class="p-layout-collapse"><i class="fa fa-bars"></i></div> -->
            <!-- <div class="p-layout-nav">
        <el-dropdown class="is-user">
          <span class="el-dropdown-link">
            admin <i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div> -->
        </div>

        <!-- 地址展示 -->
        <!-- <div class="p-layout-panel">
        <div class="p-layout-content">
          <div class="p-layout-container">
            <div class="p-layout-breadcrumb">
              <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>活动详情</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <div class="p-layout-inner">
              <slot></slot>
            </div>
          </div>
        </div>
      </div> -->
      <el-col :span="4">
        <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
           <el-menu-item-group title="分组一" v-for="menu in menus">
              <el-menu-item index="menu"><i  v-if="menu.icon"  class="fa" v-bind:class="'fa fa-'+menu.icon" aria-hidden="true"></i>{{menu.text}}</el-menu-item>
           </el-menu-item-group>
        </el-menu>
      </el-col>
        <slot></slot>
      </el-row>
</template>
<script>
import auth from '../auth'
import menus from '../nav-config'

export default {
    name: 'p-layout',
    
    data(){
      return{
        menus
      }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.p-layout-topbar {
    /*position: fixed;*/
    width: 100%;
    height: 70px;
    line-height: 70px;
    background-color: #03a9f4;
    z-index: 101;
    color: #fff;
}
.full {
    margin-left: 20px;
    font-weight: bold;
}
.p-layout-panel,.p-layout-content {
   /* position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;*/
    overflow: hidden;
    background: #f5f5f5;
    transition: all 0.3s ease;
    width: auto;
  }
.p-layout-inner {
    padding: 10px;
    background: #fff;
    border-radius: 3px;
    margin-top: 10px;
  }
</style>
