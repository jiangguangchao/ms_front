<template>
  <div class="app-container">
    <el-card shadow="always">
      <div>
        <i class="el-icon-search"></i>
        <span>搜索</span>
        <el-button @click="queryUser" type="primary" icon="el-icon-search" style="float: right" >搜索</el-button>
      </div>
      <div style="margin-top: 15px">
        <el-form :inline="true" label-width="140px" :model="userQuery">
          <el-form-item label="用户名：">
            <el-input v-model="userQuery.userId" class="search_input" size="small"></el-input>
          </el-form-item>

          <el-form-item label="角色：">
            <el-select v-model="userQuery.roleId" placeholder="请选择" clearable>
              <el-option
                v-for="item in roleArr"
                :label="item.roleName"
                :value="item.roleId"
                :key="item.roleId">
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="用户状态：">
            <el-select v-model="userQuery.state" placeholder="请选择" clearable>
              <el-option
                v-for="item in userStateArr"
                :label="item.label"
                :value="item.code"
                :key="item.code">
              </el-option>
            </el-select>
          </el-form-item>

        </el-form>
      </div>
    </el-card>

    <div style="margin-top: 20px">
      <el-card>
      <el-table :data="tableData" >

        <el-table-column
          prop="userId"
          label="用户名"
          width="100">
        </el-table-column>

        <el-table-column
          prop="roleName"
          label="角色"
          width="100">
        </el-table-column>

        <el-table-column
          prop="state"
          label="用户状态"
          width="100"
          :formatter="userStateHandler">
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
            <el-button @click="userDetail(scope.row.userId)" type="text" size="small">查看</el-button>
            <el-button @click="modifyUser(scope.row.userId)" type="text" size="small">编辑</el-button>
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
