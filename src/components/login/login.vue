<template>
  <div class="login_container">
    <div class="login_box">
      <el-form class="login_form" ref="loginForm" :model="loginForm">
<!--        用户名-->
        <el-form-item >
          <el-input v-model="loginForm.userId" prefix-icon="el-icon-user-solid" placeholder="请输入用户名" >
          </el-input>
        </el-form-item>

<!--        密码-->
        <el-form-item >
          <el-input v-model="loginForm.password" type="password" prefix-icon="el-icon-lock" placeholder="请输入密码"></el-input>
        </el-form-item>

        <el-form-item class="login_btn">
          <el-button type="primary" @click="toLogin">登录</el-button>
          <el-button type="primary" @click="toReset">重置</el-button>
        </el-form-item>


      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        userId: '',
        password: ''
      }
    }
  },
  methods: {
    async toLogin(){
      const {data:res} =await this.$http. post("login",this.loginForm)
      if (res != 'success') {
        this.$message.error(res)
        return;
      }
      this.$message.info("登录成功")
      window.sessionStorage.setItem("user","admin");
      this.$router.push("/home");

    },
    toReset: function () {
      console.log('toReset');
    }
  }
}
</script>

<style scoped>
  .login_container {
    height: 100%;
    background-color: darkseagreen;
  }

  .login_box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 300px;
    width: 450px;
    padding: 0 30px;
    background-color: #fff;
  }

  .login_form {
    margin-top: 70px;
  }

  .el-input__inner {
    border: 2px solid #DCDFE6;
  }

  .login_btn {
    margin-right: 20px;
    float: right;
  }
</style>
