<template>
    <el-row class="tac">
        <div class="p-layout-topbar clearfix">
            <div class="p-layout-name">
                <span class="full"><i class="fa fa-windows fa-2x" aria-hidden="true"></i>联鑫创展客户管理<small>by shupan</small></span>
            </div>
            <div class="p-layout-nav">
              <el-dropdown class="is-user">
              <span class="el-dropdown-link">
                admin <i class="el-icon-caret-bottom el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="logout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
          <el-col :span="24" class="panel-center">
          <aside class="p-layout-sider">
            <el-menu  default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
              <el-menu-item-group>
                  <el-menu-item :index="menu.name" v-for="menu in menus">
                      <i  v-if="menu.icon"  class="fa" v-bind:class="'fa fa-'+menu.icon" aria-hidden="true">  
                      </i>
                        {{menu.text}}
                  </el-menu-item>
              </el-menu-item-group>
            </el-menu>
            </aside>
          </el-col>
            <div class="p-layout-inner">
              <slot></slot>
            </div>
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
<style lang="less" scoped>
@mg:20px;

.p-layout-topbar {
    /*display: flex;
    justify-content: space-between;*/
    position:fixed;
    width: 100%;
    height: 70px;
    line-height: 70px;
    background-color: #03a9f4;
    z-index: 101;
    color: #fff;
    .el-dropdown-link{
      color: #fff;
      cursor:pointer;
    }
}
.panel-center{
  position:absolute;
  width:100px;
  top:70px;
  bottom:0px;
  z-index:100;
}
i{
  margin-right:5px;
  
}
.p-layout-name{
  float:left;
  font-weight: bold;
  padding-left: @mg;
  small{
    margin-left:5px;
  }
}
 .p-layout-nav{
  float:right;
  padding-right:20px;
 }
 .p-layout-sider{
  position:fixed;
  background-color:#eef1f6;
  top:70px;
  width:230px;
  height:100%;
  overflow-x:hidden;
  
 }
</style>
