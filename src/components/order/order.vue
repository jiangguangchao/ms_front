<template>

  <div class="app-container">
    <el-card shadow="always">
      <div>
        <i class="el-icon-search"></i>
        <span>订单搜索</span>
        <el-button @click="queryOrder" type="primary" icon="el-icon-search" style="float: right" >搜索</el-button>
      </div>
      <div style="margin-top: 15px">
        <el-form :inline="true" label-width="140px" :model="orderQuery">
          <el-form-item label="订单编号：">
            <el-input v-model="orderQuery.orderId" class="search_input" size="small"></el-input>
          </el-form-item>

          <el-form-item label="客户姓名：">
            <el-input v-model="orderQuery.name" class="search_input" size="small"></el-input>
          </el-form-item>

          <el-form-item label="订单状态：">
            <el-select v-model="orderQuery.state" placeholder="请选择" clearable>
              <el-option
                v-for="item in orderStateArr"
                :label="item.label"
                :value="item.code"
                :key="item.code">
              </el-option>
            </el-select>
          </el-form-item>

<!--          <el-form-item label="是否配送：">-->
<!--            <el-select v-model="orderQuery.deliverFlag" placeholder="请选择" clearable>-->
<!--              <el-option label="是" value="1">-->
<!--              </el-option>-->
<!--              <el-option label="否" value="2">-->
<!--              </el-option>-->
<!--            </el-select>-->
<!--          </el-form-item>-->

<!--          说明：这里用的mobile1，是为了方便后台接收查询对象，并不是说，后台查询时只匹配手机号1-->
          <el-form-item label="手机号：">
            <el-input v-model="orderQuery.mobile1" class="search_input" size="small"></el-input>
          </el-form-item>

          <el-form-item label="地址：">
            <el-input v-model="orderQuery.address" class="search_input" size="small"></el-input>
          </el-form-item>

          <el-form-item label="下单时间：">
            <el-col :span="11">
              <el-form-item prop="date1">
                <el-date-picker type="datetime" placeholder="选择开始时间" style="width:200px"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-form-item prop="date2">
                <el-date-picker type="datetime" placeholder="选择结束时间" style="width:200px"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>

        </el-form>
      </div>
    </el-card>

    <div style="margin-top: 20px">
      <el-card>
      <el-table :data="tableData" >

        <el-table-column
          prop="orderId"
          label="订单编号"
          width="100"
          :formatter="idFormat">
        </el-table-column>

        <el-table-column
          prop="name"
          label="客户姓名"
          width="100">
        </el-table-column>

        <el-table-column
          prop="address"
          label="地址"
          width="100">
        </el-table-column>

        <el-table-column
          prop="orderTime"
          label="下单时间"
          width="160"
          :formatter="dateFormat">
        </el-table-column>

        <el-table-column
          prop="furniture"
          label="家具">
        </el-table-column>

        <el-table-column
          prop="totalAmount"
          label="总金额">
        </el-table-column>

        <el-table-column
          prop="frontMoney"
          label="定金">
        </el-table-column>

        <el-table-column
          prop="payTime"
          label="余款支付时间"
          :formatter="dateFormat">
        </el-table-column>

        <el-table-column
          prop="deliverTime"
          label="送货时间"
          :formatter="dateFormat">
        </el-table-column>

        <el-table-column
          prop="state"
          label="订单状态"
          :formatter="orderStateHandler">
        </el-table-column>

        <el-table-column
          prop="createTime"
          label="订单创建时间"
          :formatter="dateFormat">
        </el-table-column>

        <el-table-column label="操作" >
          <template slot-scope="scope">
            <el-button @click="orderDetail(scope.row.orderId)" type="text" size="small">查看</el-button>
            <el-button @click="modifyOrder(scope.row.orderId)" type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>

      </el-table>
      </el-card>
    </div>
  </div>
</template>

<script>
  import Utils from '../../util/utils.js'

  export default {
    data() {
      return {
        tableData: [],
        orderStateArr: [
          {
            code: '1',
            label: '已完成'
          },
          {
            code: '2',
            label: '未完成'
          }
        ],
        orderQuery: {
          orderId:'',
          name: '',
          state: '',
          deliverFlag: '',
          mobile1: '',//说明：这里用的mobile1，是为了方便后台接收查询对象，并不是说，后台查询时只匹配手机号1
          address: ''

        }
      }
    },

    methods: {

      //初始化页面订单查询
      order(){
        Utils.myAxios({
          method: "get",
          url: "order",
        }).then(result => {
          this.tableData = result.data.orderList
        })

      },

      //根据查询条件查询订单
      queryOrder() {
        Utils.myAxios({
          method: "post",
          url: "order/query",
          data: this.orderQuery,
          successMsg: "查询成功",
        }).then(result => {
          this.tableData = result.data.orderList
        })
      },

      //查看订单按钮
      orderDetail(orderId) {
        this.$router.push({path: "/container/om/order/detail/" + orderId});
      },

      //编辑订单按钮
      modifyOrder(orderId) {
        console.log("点击编辑按钮" + orderId)
        this.$router.push({path: "/container/om/order/modify/" + orderId})
      },



      //格式化日期
      dateFormat(row,column,cellValue){
        if (cellValue == null) {
          return ""
        }

        let date = new Date(cellValue)
        if (date == '') {
          return '';
        }
        let fmt = 'yyyy-MM-dd hh:mm:ss'

        if (/(y+)/.test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        let o = {
          'M+': date.getMonth() + 1,
          'd+': date.getDate(),
          'h+': date.getHours(),
          'm+': date.getMinutes(),
          's+': date.getSeconds()
        };
        for (let k in o) {
          if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : this.padLeftZero(str));
          }
        }
        return fmt
      },

      padLeftZero(str) {
        return ('00' + str).substr(str.length);
      },

      //订单状态数字转文字说明
      orderStateHandler(row,column,cellValue) {
        if (cellValue == null) {
          return '';
        }
        if (cellValue == '1') {
          return '已完成'
        }
        if (cellValue == '2') {
          return "未完成"
        }
      },

      //如果位数不够，前面补零
      idFormat(row,column,cellValue){
        if (cellValue == null) {
          return ''
        }
        let str = '000000' + cellValue
        str = str.substring(str.length-6)
        return str;
      }
    },

    created() {
      this.order();

    }

  }
</script>

<style scoped>
  .search_input {
    width:200px;
  }
</style>
