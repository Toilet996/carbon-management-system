# 双碳数据可视化平台

> 双碳数据大屏，基于 Vue 2 + DataV + ECharts。

完整项目说明见根目录 [README](../README.md)。

## 技术栈

- Vue 2.6
- DataV
- ECharts 5
- Sass

## 启动

```bash
npm install --registry=https://registry.npmmirror.com
npm run dev
```

默认地址：`http://localhost:8080`

接口地址在 `.env.dev` 中配置：

```text
VUE_APP_BASE_URL = 'http://localhost:9090'
```

## 构建

```bash
npm run build:prod
```

## 说明

- 大屏数据来自后端报表接口，需要先启动 `carbon/neu-admin` 后端。
- 如 Node 版本较高，项目脚本已使用 `--openssl-legacy-provider` 兼容 Vue CLI 4。
