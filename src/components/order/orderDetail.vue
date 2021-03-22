<template>
  <el-card>
    <el-row>
      <el-col :span="6" class="form-border form-left-bg ">订单编号</el-col>
      <el-col class="form-border " :span="18">{{ orderDetail.orderId }}</el-col>
    </el-row>

    <el-row>
      <el-col :span="6" class="form-border form-left-bg ">客户编号</el-col>
      <el-col class="form-border " :span="18">{{ orderDetail.customerId }}</el-col>
    </el-row>

    <el-row>
      <el-col :span="6" class="form-border form-left-bg ">下单时间</el-col>
      <el-col class="form-border " :span="18">{{ orderDetail.orderTime }}</el-col>
    </el-row>

    <el-row>
      <el-col :span="6" class="form-border form-left-bg ">家具</el-col>
      <el-col class="form-border " :span="18">{{ orderDetail.furniture }}</el-col>
    </el-row>

    <el-row>
      <el-col :span="6" class="form-border form-left-bg ">总金额</el-col>
      <el-col class="form-border " :span="18">{{ orderDetail.totalAmount }}</el-col>
    </el-row>

    <el-row>
      <el-col :span="6" class="form-border form-left-bg ">定金</el-col>
      <el-col class="form-border " :span="18">{{ orderDetail.frontMoney }}</el-col>
    </el-row>

    <el-row>
      <el-col :span="6" class="form-border form-left-bg ">余款支付时间</el-col>
      <el-col class="form-border " :span="18">{{ orderDetail.payTime }}</el-col>
    </el-row>

    <el-row>
      <el-col :span="6" class="form-border form-left-bg ">送货时间</el-col>
      <el-col class="form-border " :span="18">{{ orderDetail.deliverTime }}</el-col>
    </el-row>

    <el-row>
      <el-col :span="6" class="form-border form-left-bg ">订单状态</el-col>
      <el-col class="form-border " :span="18">{{ orderDetail.state }}</el-col>
    </el-row>

    <el-row>
      <el-col :span="6" class="form-border form-left-bg ">创建时间</el-col>
      <el-col class="form-border " :span="18">{{ orderDetail.createTime }}</el-col>
    </el-row>

    <el-row>
      <el-col :span="6" class="form-border form-left-bg ">客户名称</el-col>
      <el-col class="form-border " :span="18">{{ orderDetail.name }}</el-col>
    </el-row>

    <el-row>
      <el-col :span="6" class="form-border form-left-bg ">手机号1</el-col>
      <el-col class="form-border " :span="18">{{ orderDetail.mobile1 }}</el-col>
    </el-row>

    <el-row>
      <el-col :span="6" class="form-border form-left-bg ">手机号2</el-col>
      <el-col class="form-border " :span="18">{{ orderDetail.mobile2 }}</el-col>
    </el-row>

    <el-row>
      <el-col :span="6" class="form-border form-left-bg ">地址</el-col>
      <el-col class="form-border " :span="18">{{ orderDetail.address }}</el-col>
    </el-row>


  </el-card>
</template>

<script>
export default {
  data() {
    return {
      orderDetail: {
        orderId: '',
        customerId: '',
        orderTime: '',
        furniture: '',
        totalAmount: '',
        frontMoney: '',
        payTime: '',
        deliverTime: '',
        state: '',
        createTime: '',
        name: '',
        mobile1: '',
        mobile2: '',
        address: ''

      }
    }
  },
  methods: {
    async findOrderDetail() {
      const orderId = this.$route.params.orderId;
      console.log(orderId);
      const {data:res} = await this.$http.get("order/detail/" + orderId)

      if (res.code != '00') {
        this.$message.error(res.message)
        return;
      }
      this.orderDetail = res.data.orderList[0]

    },
  },
  created() {
    this.findOrderDetail()

  }
}
</script>

<style scoped>

  .form-border {
    height: 43px;
    line-height: 43px;
    border: 1px solid #DCDFE6;
    padding-left: 10px;
    }
  .form-left-bg {
    background: #F2F6FC;
    border-right: 0;
  }

</style>
