<template>
  <div>
    <div id="searchArea" style="border: 2px solid">
      <el-row :gutter="20">
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
    </div>
    <div id="table" style="margin-top: 20px">
      <el-table
        :data="
          tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
        "
        border="True"
        style="width: 60%; margin-left: 20%; line-height: 10px"
        :row-class-name="tableRowClassName"
      >
        <el-table-column prop="jjh" label="机架号" width="180">
        </el-table-column>
        <el-table-column prop="yph" label="硬盘号" width="180">
        </el-table-column>
        <el-table-column prop="dqzt" label="当前状态"> </el-table-column>
      </el-table>
    </div>
    <div id="pagination" style="position: absolute; right: 60px; bottom: 60px">
      <el-pagination
        align="center"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[1, 5, 10, 20]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length"
        hide-on-single-page:false
      ></el-pagination>
    </div>
  </div>
</template>

<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
.el-row {
  margin-top: 10px;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
  margin-left: 5%;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>

<script>
export default {
  methods: {
    tableRowClassName ({ row }) {
      if (row.dqzt === '危险') {
        return 'warning-row'
      } else if (row.dqzt === '健康') {
        return 'success-row'
      }
      return ''
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.currentPage = 1
      this.pageSize = val
    },
    // 当前页改变时触发 跳转其他页
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.currentPage = val
    }

  },
  data () {
    return {
      tableData: [{
        jjh: '1',
        yph: '10',
        dqzt: '健康'
      }, {
        jjh: '2',
        yph: '1',
        dqzt: '健康'
      }, {
        jjh: '10',
        yph: '100',
        dqzt: '健康'
      }, {
        jjh: '16',
        yph: '8',
        dqzt: '危险'
      }],
      currentPage: 1, // 当前页码
      total: 20, // 总条数
      pageSize: 10 // 每页的数据条数
    }
  }
}
</script>
