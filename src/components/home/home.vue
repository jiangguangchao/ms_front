<!--用户展示首页内容-->

<template>
  <div class="over-view">
    <el-card>
      <div class="today">今日总览</div>
      <el-row>
        <el-col :span="12">今日订单数</el-col>
        <el-col :span="12">今日营业额</el-col>
      </el-row>
      <el-row>
        <el-col :span="12">10</el-col>
        <el-col :span="12">12323</el-col>
      </el-row>
    </el-card>

    <div id="todayecharts" ></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      showTodayEcharts() {
        let myChart = this.$echarts.init(document.getElementById('todayecharts'));
        let option = {
          title: {
            text: '今日订单'
          },
          tooltip: {},
          legend: {
            data:['销量','金额']
          },
          xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          yAxis: {},
          series: [{

            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        }
        myChart.setOption(option)
      }
    },
    mounted() {
      this.showTodayEcharts();
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

  .today {
    background:rgb(116 122 142);
    padding:20px;
  }
  #todayecharts {
    width: 600px;
    height: 400px ;
  }
</style>
