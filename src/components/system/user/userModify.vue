<template>
  <div>
    <div class="userModify">
      <el-tabs type="border-card">
        <el-tab-pane label="基本信息1">
          <div>
            <el-form label-width="140px">
              <el-form-item label="用户名：">
                <el-input v-model="userDetail.userId" disabled class="modify_input" size="small"></el-input>
              </el-form-item>

              <el-form-item label="角色：">
                <el-input v-model="userDetail.roleId" class="modify_input" size="small"></el-input>
              </el-form-item>

              <el-form-item label="用户状态：">
                <el-input v-model="userDetail.state" class="modify_input" size="small"></el-input>
              </el-form-item>

              <el-form-item label="创建者：">
                <el-input v-model="userDetail.creator" disabled class="modify_input" size="small"></el-input>
              </el-form-item>

              <el-form-item label="创建时间：">
                <el-input v-model="userDetail.createTime" disabled class="modify_input" size="small"></el-input>
              </el-form-item>

              <el-button @click="modifyUser" type="primary">提交</el-button>

            </el-form>
          </div>
        </el-tab-pane>

        <el-tab-pane label="权限">
          <el-tree :data="menuTree" show-checkbox :props="defaultProps" class="menuTreecss">
          </el-tree>

          <el-button @click="modifyUser" type="primary">提交</el-button>

        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      userDetail: {
        userId: 'jgc',
        roleId: 1,
        state: '01',
        auth: '所有权限',
        creator: '',
        createTime: '',
      },

      menuTree: [
        {
          name: "首页"
        },
        {
          name: "系统",
          children: [
            {
              name: "用户管理"
            },
            {
              name: "角色管理"
            }
          ]
        },
        {
          name: "订单",
          children: [
            {
              name: "订单管理",
            },
            {
              name: "历史订单管理",
            },
            {
              name: "订单统计"
            },
          ]
        },
        {
          name: "客户",
          children: [
            {
              name: "客户管理"
            },
            {
              name: "客户统计"
            },
          ]
        }

      ],
      defaultProps:{
        label:"name",
        children: "children"
      }
    }
  },
  methods: {
    modifyUser() {
      //提交修改
    }
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

  .menuTreecss /deep/ .el-tree-node__label{
    font-size:16px;
    color:#000;
  }

  .el-button--primary{
    display:block;
    margin:20px auto;
  }

  .modify_input {
      width: 200px;
  }


</style>
