<template>
  <el-container style="height: 730px; border: 1px solid #eee">
    <el-header>智能运维管理系统</el-header>
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu
          :default-openeds="['1', '3']"
          router
          :default-active="this.$route.path"
        >
          <el-submenu index="1">
            <template slot="title"
              ><i class="el-icon-message"></i>运维服务</template
            >
            <el-menu-item index="/showZDXJ">自动巡检</el-menu-item>
            <el-menu-item index="/showZTJK">状态监控</el-menu-item>
            <el-menu-item index="/showGJLB">告警列表</el-menu-item>
            <el-menu-item index="/showRZJK">日志监控</el-menu-item>
            <el-menu-item index="/showZHXX">账号信息</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"
              ><i class="el-icon-menu"></i>配置管理</template
            >
            <el-menu-item index="/showZHXX">账户信息</el-menu-item>
            <el-menu-item index="/showFWS">服务商</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"
              ><i class="el-icon-setting"></i>账户管理</template
            >
            <el-menu-item index="/showZHXX">账户信息</el-menu-item>
            <el-menu-item index="/showJSXX">角色信息</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    <el-footer>Footer </el-footer>
  </el-container>
</template>
<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>
