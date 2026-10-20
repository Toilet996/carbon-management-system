# 双碳招投标网子系统

> 双碳招投标门户，基于 Vue 2 + Element UI。

完整项目说明见根目录 [README](../README.md)。

## 功能

- 招标信息公告
- 企业注册与信息维护
- 投标报名 / 投标文件
- 投诉与处理
- 政策法规、平台动态

## 启动

```bash
npm install --registry=https://registry.npmmirror.com
npm run dev -- --port 8081
```

默认地址：`http://localhost:8081`

接口代理目标：`http://localhost:9090`（见 `vue.config.js`）。

## 构建

```bash
npm run build:prod
```

## 主要页面

- 招标：`src/views/bid`
- 企业：`src/views/enterprise`
- 投诉：`src/views/complaint`
- 政策法规：`src/views/policylaw`
- 平台动态：`src/views/information`
