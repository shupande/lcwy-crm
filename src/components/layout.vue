<template>
    <el-row class="tac">
        <div class="p-layout-topbar clearfix">
            <div class="p-layout-name">
                <span class="full"><i class="fa fa-windows fa-2x" aria-hidden="true"></i>联鑫创展客户管理<small>by shupan</small></span>
            </div>
            <div class="p-layout-nav">
              <el-dropdown class="is-user" @command="handleDropdown">
              <span class="el-dropdown-link">
                admin <i class="el-icon-caret-bottom el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="logout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
        <div class="p-layout-body">
          <aside class="p-layout-sider">
            <el-menu default-active="user" class="el-menu-vertical-demo" 
            :unique-opened="true" 
            :router="true">
              <el-menu-item-group>
                  <el-menu-item :index="menu.name" v-for="menu in menus">
                      <i  v-if="menu.icon"  class="fa" v-bind:class="'fa fa-'+menu.icon" aria-hidden="true">  
                      </i>
                        {{menu.text}}
                  </el-menu-item>
              </el-menu-item-group>
            </el-menu>
          </aside>
          <div class="p-layout-inner">
              <slot></slot> 
          </div>
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
        menus,
      }
    },
    methods: {
      //退出登录
      handleDropdown(cmd) {
        if(cmd=="logout"){
          // console.log("success");
            var _this = this;
            this.$confirm('确认退出吗?', '提示', {
              type: 'warning'
            }).then(() => {
              _this.$router.replace('/');
            }).catch(() => {

            });
        }
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
    height: 60px;
    line-height: 60px;
    background-color: #03a9f4;
    z-index: 101;
    color: #fff;
    .el-dropdown-link{
      color: #fff;
      cursor:pointer;
    }
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
  width: 230px;
  background-color: #eef1f6;
  position: fixed;
  top: 60px;
  left: 0;
  height: 100%;
  transition: all 0.3s ease;
  z-index: 102;
}
.p-layout-panel{
  position:absolute;
  top:0;
  bottom:0;
  left:230px;
  right:0;
  background: blue;
  transition: all 0.3s ease;
  width: auto;
}
.p-layout-content{
  position:absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  background: blue;
  transition: all 0.3s ease;
  width: auto;
  //overflow-x: hidden;
  overflow-y: scroll;
}
.p-layout-inner{
    position: absolute;
    right: 0px;
    top: 0px;
    bottom: 0px;
    left: 230px;
    //overflow-y: scroll;
    padding: 15px;
    z-index:102;
}
.p-layout-body {
    background:blue;
    position: absolute;
    top: 60px;
    width:100%;
    bottom: 0px;
    //overflow: hidden;
    float: left;
    box-sizing: border-box;
    z-index:100;
}
</style>
