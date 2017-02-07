<template>
    <p-layout>
        <section>
            <!--工具条-->
            <template>
                <el-col :span="24" class="toolbar">
                    <el-form :inline="true" :model="filters">
                        <el-form-item>
                            <el-input v-model="filters.name" placeholder="姓名/公司名"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" v-on:click="getUsers">查询</el-button>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="handleAdd">新增</el-button>
                        </el-form-item>
                    </el-form>
                </el-col>
            </template>
            <!--列表-->
            <template>
                <el-table :data="users" highlight-current-row v-loading="listLoading" style="width: 100%;">
                    <el-table-column type="index" width="60">
                    </el-table-column>
                    <el-table-column prop="company" label="公司名" width="220" sortable>
                    </el-table-column>
                    <el-table-column prop="sex" label="性别" width="70" :formatter="formatSex" sortable>
                    </el-table-column>
                    <el-table-column prop="name" label="联系人" width="90" >
                    </el-table-column>
                    <el-table-column prop="addr" label="收货地址" min-width="200" sortable>
                    </el-table-column>
                    <el-table-column prop="phone" label="电话" min-width="120" >
                    </el-table-column>
                    <el-table-column inline-template :context="_self" label="操作" width="150">
                        <span>
            <el-button size="small" @click="handleEdit(row)">编辑</el-button>
            <el-button type="danger" size="small" @click="handleDel(row)">删除</el-button>
          </span>
                    </el-table-column>
                </el-table>
            </template>
            <!--分页-->
            <el-col :span="24" class="toolbar" style="padding-bottom:10px;">
                <el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20" :total="total" style="float:right;">
                </el-pagination>
            </el-col>
            <!--编辑界面-->
            <el-dialog :title="editFormTtile" v-model="editFormVisible" :close-on-click-modal="false">
                <el-form :model="editForm" label-width="90px" :rules="editFormRules" ref="editForm">
                    <el-form-item label="公司名" prop="company" v-if="showComEdit">
                        <el-input v-model="editForm.company" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="联系人" prop="name">
                        <el-input v-model="editForm.name" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="性别">
                        <el-radio-group v-model="editForm.sex">
                            <el-radio class="radio" :label="1">男</el-radio>
                            <el-radio class="radio" :label="0">女</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="联系电话" prop="phone">
                        <el-input type="text" v-model.number="editForm.phone" ></el-input>
                    </el-form-item>
                    <el-form-item label="收货地址" prop="addr">
                        <el-input type="textarea" v-model="editForm.addr"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click.native="editFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click.native="editSubmit" :loading="editLoading">{{btnEditText}}</el-button>
                </div>
            </el-dialog>
        </section>
    </p-layout>
</template>
<script>
import util from '../common/util'
import NProgress from 'nprogress'
import {
    getUserListPage,
    removeUser,
    editUser,
    addUser
} from '../api/api';
export default {
    data() {
            return {
                filters: {
                    name: ''
                },
                users: [],
                total: 0,
                page: 1,
                showComEdit:false,
                listLoading: false,
                editFormVisible: false, //编辑界面显是否显示
                editFormTtile: '编辑', //编辑界面标题
                //编辑界面数据
                editForm: {
                    id: 0,
                    company:'',
                    name: '',
                    sex: -1,
                    phone: '',
                    addr: ''
                },
                editLoading: false,
                btnEditText: '提 交',
                editFormRules: {
                    name: [{
                        required: true,
                        message: '请输入姓名',
                        trigger: 'blur'
                    }],
                    addr: [{
                        required: true,
                        message: '请输入地址',
                        trigger: 'blur'
                    }]
                }
            }
        },
        methods: {
            //性别显示转换
            formatSex: function(row, column) {
                return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
            },
            handleCurrentChange(val) {
                this.page = val;
                this.getUsers();
            },
            //获取用户列表
            getUsers() {
                let para = {
                    page: this.page,
                    name: this.filters.name
                };
                this.listLoading = true;
                NProgress.start();
                getUserListPage(para).then((res) => {
                    this.total = res.data.total;
                    this.users = res.data.users;
                    this.listLoading = false;
                    NProgress.done();
                });
            },
            //删除
            handleDel: function(row) {
                //console.log(row);
                var _this = this;
                this.$confirm('确认删除该记录吗?', '提示', {
                    //type: 'warning'
                }).then(() => {
                    _this.listLoading = true;
                    NProgress.start();
                    let para = {
                        id: row.id
                    };
                    removeUser(para).then((res) => {
                        _this.listLoading = false;
                        NProgress.done();
                        _this.$notify({
                            title: '成功',
                            message: '删除成功',
                            type: 'success'
                        });
                        _this.getUsers();
                    });
                }).catch(() => {});
            },
            //显示编辑界面
            handleEdit: function(row) {
                //清空校验结果,防止点击新增导致validate后点编辑出现错误提示
                if(this.$refs.editForm){
                    this.$refs.editForm.resetFields();
                }
                //隐藏公司栏
                this.showComEdit=false;
                this.editFormVisible = true;
                //填充
                this.editFormTtile = '编辑';
                this.editForm.id = row.id;
                this.editForm.name = row.name;
                this.editForm.sex = row.sex;
                this.editForm.phone = row.phone;
                this.editForm.addr = row.addr;
                
            },
            //编辑 or 新增
            editSubmit: function() {
                var _this = this;
                _this.$refs.editForm.validate((valid) => {
                    if (valid) {
                        _this.$confirm('确认提交吗？', '提示', {}).then(() => {
                            _this.editLoading = true;
                            NProgress.start();
                            _this.btnEditText = '提交中';
                            if (_this.editForm.id == 0) {
                                //新增
                                let para = {
                                    company: _this.editForm.company,
                                    name: _this.editForm.name,
                                    sex: _this.editForm.sex,
                                    phone: _this.editForm.phone,
                                    addr: _this.editForm.addr,
                                };
                                addUser(para).then((res) => {
                                    _this.editLoading = false;
                                    NProgress.done();
                                    _this.btnEditText = '提 交';
                                    _this.$notify({
                                        title: '成功',
                                        message: '提交成功',
                                        type: 'success'
                                    });
                                    _this.editFormVisible = false;
                                    _this.getUsers();

                                });
                            } else {
                                //编辑
                                let para = {
                                    id: _this.editForm.id,
                                    name: _this.editForm.name,
                                    sex: _this.editForm.sex,
                                    phone: _this.editForm.phone,
                                    addr: _this.editForm.addr,
                                };
                                editUser(para).then((res) => {
                                    _this.editLoading = false;
                                    NProgress.done();
                                    _this.btnEditText = '提 交';
                                    _this.$notify({
                                        title: '成功',
                                        message: '提交成功',
                                        type: 'success'
                                    });
                                    _this.editFormVisible = false;
                                    _this.getUsers();
                                });
                            }
                        });
                    }
                });
            },
            //显示新增界面
            handleAdd: function() {
                var _this = this;
                this.showComEdit=true;
                this.editFormVisible = true;
                this.editFormTtile = '新增';
                this.editForm.id = 0;
                this.editForm.company='';
                this.editForm.name = '';
                this.editForm.sex = 1;
                this.editForm.phone = '';
                this.editForm.addr = '';
            }
        },
        mounted() {
            this.getUsers();
        }
}
</script>
<style scoped>
</style>
