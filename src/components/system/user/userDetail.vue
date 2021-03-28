<template>
  <div>
    <div>
      <el-tabs type="border-card">
        <el-tab-pane label="基本信息">
          <div>
            <el-row>
              <el-col :span="6" class="form-border form-left-bg ">用户名</el-col>
              <el-col class="form-border " :span="18">{{ userDetail.userId }}</el-col>
            </el-row>

            <el-row>
              <el-col :span="6" class="form-border form-left-bg ">角色</el-col>
              <el-col class="form-border " :span="18">{{ userDetail.roleId }}</el-col>
            </el-row>

            <el-row>
              <el-col :span="6" class="form-border form-left-bg ">用户状态</el-col>
              <el-col class="form-border " :span="18">{{ userDetail.state }}</el-col>
            </el-row>

            <el-row>
              <el-col :span="6" class="form-border form-left-bg ">创建者</el-col>
              <el-col class="form-border " :span="18">{{ userDetail.creator }}</el-col>
            </el-row>

            <el-row>
              <el-col :span="6" class="form-border form-left-bg ">创建时间</el-col>
              <el-col class="form-border " :span="18">{{ userDetail.createTime }}</el-col>
            </el-row>
          </div>
        </el-tab-pane>

        <el-tab-pane label="权限">
          <el-tree :data="menuTree" :props="defaultProps" class="menuTreecss">

          </el-tree>
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

</style>
