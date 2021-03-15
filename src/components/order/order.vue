<template>
  <el-table :data="tableData">
    <el-table-column
      prop="orderId"
      label="订单编号"
      width="100">
    </el-table-column>
    <el-table-column
      prop="orderDate"
      label="下单时间"
      width="130">
    </el-table-column>
    <el-table-column
      prop="name"
      label="客户姓名"
      width="100">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
    <el-table-column
      prop="mobile"
      label="手机号">
    </el-table-column>
    <el-table-column
      prop="totalAmount"
      label="总金额">
    </el-table-column>
    <el-table-column
      prop="furniture"
      label="家具">
    </el-table-column>
    <el-table-column
      prop="deliveryDate"
      label="送货时间">
    </el-table-column>
    <el-table-column
      prop="orderState"
      label="订单状态">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [
          {
            orderId: '0001',
            orderDate: '2020-10-01',
            name: '刘德华',
            address: '韩庄',
            mobile: '13098788778',
            totalAmount: '10000',
            furniture: '床，沙发',
            deliveryDate: '2020-10-02',
            orderState: '已完成'
          },
          {
            orderId: '0002',
            orderDate: '2020-10-01',
            name: '刘德华',
            address: '韩庄  5I?,=*dNjNFt',
            mobile: '13098788778',
            totalAmount: '10000',
            furniture: '床，沙发',
            deliveryDate: '2020-10-02',
            orderState: '已完成'
          },

        ]
      }
    }
  }
</script>

<style scoped></style>
