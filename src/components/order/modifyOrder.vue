<template>
  <el-card>
    <el-form label-width="140px">
      <el-form-item label="订单编号：">
        <el-input v-model="order.orderId" disabled class="modify_input" size="small"></el-input>
      </el-form-item>

      <el-form-item label="客户编号：">
        <el-input v-model="order.customerId" disabled class="modify_input" size="small"></el-input>
      </el-form-item>

      <el-form-item label="下单时间：">
        <el-input v-model="order.orderTime" disabled class="modify_input" size="small"></el-input>
      </el-form-item>

      <el-form-item label="家具：">
        <el-input v-model="order.furniture" class="modify_input" size="small"></el-input>
      </el-form-item>

      <el-form-item label="总金额：">
        <el-input v-model="order.totalAmount" class="modify_input" size="small"></el-input>
      </el-form-item>

      <el-form-item label="定金：">
        <el-input v-model="order.frontMoney" class="modify_input" size="small"></el-input>
      </el-form-item>

      <el-form-item label="余款支付时间：">
        <el-input v-model="order.payTime" class="modify_input" size="small"></el-input>
      </el-form-item>

      <el-form-item label="送货时间：">
        <el-input v-model="order.deliverTime" class="modify_input" size="small"></el-input>
      </el-form-item>

      <el-form-item label="订单状态：">
        <el-input v-model="order.state" class="modify_input" size="small"></el-input>
      </el-form-item>

      <el-form-item label="创建时间：">
        <el-input v-model="order.createTime" disabled class="modify_input" size="small"></el-input>
      </el-form-item>

      <el-form-item label="客户名称：">
        <el-input v-model="order.name" disabled class="modify_input" size="small"></el-input>
      </el-form-item>

      <el-form-item label="手机号1：">
        <el-input v-model="order.mobile1" disabled class="modify_input" size="small"></el-input>
      </el-form-item>

      <el-form-item label="手机号2：">
        <el-input v-model="order.mobile2" disabled class="modify_input" size="small"></el-input>
      </el-form-item>

      <el-form-item label="地址：">
        <el-input v-model="order.address" disabled class="modify_input" size="small"></el-input>
      </el-form-item>

      <el-button @click="modifyOrder" type="primary">主要按钮</el-button>

    </el-form>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      order: {
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
      const {data:res} = await this.$http.get("forder/detail/" + orderId)

      if (res.code != '00') {
        this.$message.error(res.message)
        return;
      }
      this.order = res.data.orderList[0]

    },

    async modifyOrder() {
      const {data:res} = await this.$http.post("forder/modify", this.order)
      if (res.code != '00') {
        this.$message.error(res.message)
        return;
      }
      this.$message.success("订单修改成功")
      this.$router.push({path: '/container/forder'})
    }
  },
  created() {
    this.findOrderDetail();
  }
}
</script>

<style scoped>
  .modify_input {
    width: 300px;
  }
</style>
