<template>
<el-col :span="20">
  <el-table
    :data="tableData3"
    style="width: 100%" class="el-table">
    <el-table-column type="expand">
      <template scope="props">
        <p>省: {{ props.row.province }}</p>
        <p>市: {{ props.row.city }}</p>
        <p>住址: {{ props.row.detailAddress }}</p>
        <p>邮编: {{ props.row.zip }}</p>
      </template>
    </el-table-column>
    <el-table-column
      label="公司名"
      prop="company">
    </el-table-column>
    <el-table-column
      label="联系人"
      prop="contact">
    </el-table-column>
    <el-table-column
      label="操作"
      prop="edit">
    </el-table-column>
  </el-table>
</el-col>
</template>

<script>
  export default {
    data() {
      return {
        tableData3: [{
          company: '广州合丰',
          contact: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          detailAddress: '金沙江路 1518 弄',
          zip: 200333
        }, {
          company: '上海心意',
          contact: '李四',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          detailAddress: '金沙江路 1518 弄',
          zip: 200333
        }, {
          company: '北京海荣',
          contact: '王五',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          detailAddress: '金沙江路 1518 弄',
          zip: 200333
        }, {
          company: '成都联创',
          contact: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          detailAddress: '金沙江路 1518 弄',
          zip: 200333
        }]
      }
    }
  }
</script>

<style>
.el-table{
  padding: 0px 20px 20px 20px;
}

</style>