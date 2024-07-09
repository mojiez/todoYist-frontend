<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="1" @click="changeMenu('add')">
          <pie-chart-outlined />
          <span>新增事项</span>
        </a-menu-item>
        <a-menu-item key="2" @click="changeMenu('today')">
          <desktop-outlined />
          <span>今日待办</span>
        </a-menu-item>
        <a-menu-item key="3" @click="changeMenu('total')">
          <desktop-outlined />
          <span>全部事项</span>
        </a-menu-item>
        <a-menu-item key="4" @click="changeMenu('expired')">
          <desktop-outlined />
          <span>过期事项</span>
        </a-menu-item>
        <a-menu-item key="5" @click="changeMenu('daily')">
          <desktop-outlined />
          <span>每日打卡</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #title>
            <span>
              <user-outlined />
              <span>User</span>
            </span>
          </template>
          <a-menu-item key="6">Tom</a-menu-item>
          <a-menu-item key="7">Bill</a-menu-item>
          <a-menu-item key="8">Alex</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #title>
            <span>
              <team-outlined />
              <span>Team</span>
            </span>
          </template>
          <a-menu-item key="9">Team 1</a-menu-item>
          <a-menu-item key="10">Team 2</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="11">
          <file-outlined />
          <span>File</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <!--    下面这一段是界面-->
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          <!--          Bill is a cat.-->
          <!--          定义路由出口-->
          <router-view />
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
} from "@ant-design/icons-vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const collapsed = ref<boolean>(false);
const selectedKeys = ref<string[]>(["1"]);
const router = useRouter();
// 切换菜单栏
const changeMenu = (route: any) => {
  // 获取路由对象并切换
  console.log(route);
  router.push(route);
};
</script>
<style scoped>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}

[data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
}
</style>
