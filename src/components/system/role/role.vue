<template>
  <div class="app-container">
    <div style="margin-top: 20px">
      <el-card>
      <el-table :data="tableData" >

        <el-table-column
          prop="roleName"
          label="角色"
          width="100">
        </el-table-column>

        <el-table-column
          prop="creator"
          label="创建者"
          width="160">
        </el-table-column>

        <el-table-column
          prop="createTime"
          label="创建时间">
        </el-table-column>

        <el-table-column label="操作" >
          <template slot-scope="scope">
            <el-button @click="roleMenuDetail(scope.row.userId)" type="text" size="small">查看权限</el-button>
            <el-button @click="modifyRoleMenu(scope.row.userId)" type="text" size="small">编辑权限</el-button>
          </template>
        </el-table-column>

      </el-table>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      tableData: [
        {
          userId: 'jgc',
          roleName: '管理员',
          state: '01',
        },
      ],
      userQuery: {
        userId: '',
        roleId: '',
        state: '',
      },
      userStateArr: [
        {
          label:"正常",
          code: "01"
        },
        {
          label:"不可用",
          code: "02"
        }
      ],
      roleArr: [
        {
          roleName: "管理员",
          roleId: 1
        },
        {
          roleName: "财务",
          roleId: 2
        }
      ]
    }
  },
  methods: {

    //搜索
    queryUser(){

    },


    //用户状态数字转文字说明
    userStateHandler(row,column,cellValue) {
      if (cellValue == null) {
        return '';
      }
      if (cellValue == '01') {
        return '正常'
      }
      if (cellValue == '02') {
        return "不可用"
      }
    },

    userDetail(userId) {
      this.$router.push({path: "/container/system/user/detail"})
    },

    modifyUser(userId) {
      this.$router.push({path: "/container/system/user/modify"})
    }

  }
}
</script>

<style>

</style>
