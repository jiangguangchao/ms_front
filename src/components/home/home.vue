<!--用户展示首页内容-->

<template>
  <div class="over-view">
    <el-card>
      <div style="background:rgb(116 122 142);padding:20px">今日总览</div>
      <el-row>
        <el-col :span="12">今日订单数</el-col>
        <el-col :span="12">今日营业额</el-col>
      </el-row>
      <el-row>
        <el-col :span="12">10</el-col>
        <el-col :span="12">12323</el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {

    }
  }
</script>

<style >
  .over-view .el-col-12 {
    text-align:center;
    padding:20px;
    background-color:#f19d64;
    font-weight:700;

  }
  .el-card__body{
    padding:0;
  }
</style>
