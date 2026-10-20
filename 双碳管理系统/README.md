# 双碳管理系统（后台管理端）

> 双碳管理系统的后台管理前端，基于 Vue 2 + Element UI。

完整项目说明见根目录 [README](../README.md)。

## 技术栈

- Vue 2.6
- Element UI 2.14
- Vue Router / Vuex
- Axios
- ECharts 5

## 启动

```bash
npm install --registry=https://registry.npmmirror.com
npm run dev
```

默认地址：`http://localhost`（端口 80）

开发环境通过 `vue.config.js` 将接口代理到 `http://localhost:9090`。

## 构建

```bash
npm run build:prod
```

## 主要页面

- 碳足迹 / 排放：`src/views/cfConfig`、`src/views/cfElectric`、`src/views/carbonReport`
- 供应链 SCM：`src/views/purchase`、`src/views/sale`
- 智能仓储 WMS：`src/views/warehouse`、`src/views/wmsApply`、`src/views/wmsReport`
- 制造执行 MES：`src/views/mesPlan`、`src/views/mesProduct`、`src/views/mesCheck`
- 招投标：`src/views/bid`
- 系统管理：`src/views/system`
