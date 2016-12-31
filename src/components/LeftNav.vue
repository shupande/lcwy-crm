<template>
    <el-col :span="4">
        <el-menu default-active="1-1" class="el-menu-vertical" @open="handleOpen" @close="handleClose">
            <el-submenu index="1">
                <template slot="title"><i class="fa fa-address-card-o fa-lg" aria-hidden="true"></i>客户信息</template>
                <el-menu-item-group>
                    <template slot="title">管理</template>
                    <el-menu-item index="1-1">新增</el-menu-item>
                    <el-menu-item index="1-2">查询</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="南区">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2"><i class="fa fa-bar-chart fa-lg" aria-hidden="true"></i>报表</el-menu-item>
        </el-menu>
    </el-col>
</template>

<script>
    export default {
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