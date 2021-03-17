<template>
  <el-table :data="tableData">

    <el-table-column
      prop="orderId"
      label="订单编号"
      width="100"
      :formatter="idFormat">
    </el-table-column>

    <el-table-column
      prop="customerId"
      label="客户编号"
      width="100"
      :formatter="idFormat">
    </el-table-column>

    <el-table-column
      prop="orderTime"
      label="下单时间"
      width="100"
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
      label="订单状态">
    </el-table-column>

    <el-table-column
      prop="createTime"
      label="订单创建时间"
      :formatter="dateFormat">
    </el-table-column>

  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: []
      }
    },

    methods: {
      async order(){
        const {data:res} =await this.$http. get("forder",)
        if (res.code != '00') {
          this.$message.error(res.message);
          return;
        }

        this.tableData = res.data.orderList;

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

<style scoped></style>
