<p align="center">
    <img src="https://gitee.com/agile-development-system/agds-doc-preset/raw/master/lib/docs/logos/light/1.png" alt="logo">
</p>

# @agds/ts-config-js

**版本** ：1.0.4

agds系统的ts配置预设

## 快速开始

### 安装

```bash
npm i -D @agds/ts-config-js
```



### 引入
```json
// tsconfig.json
{
  "extends": "@agds/ts-config-js",
  "include": [
    "src"
  ]
}
```





<a name="source"></a>

## 配置源码

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "commonjs",
    "allowJs": true,
    "declaration": true,
    "allowSyntheticDefaultImports": true,
    "baseUrl": ".",
    "moduleResolution": "node",
    "experimentalDecorators": true,
    "esModuleInterop": true,
    "declarationDir": "lib/types",
    "outDir": "lib"
  }
}
```




<a name="license"></a>

## 许可证

[MIT License](https://gitee.com/agile-development-system/ts-config-js/blob/master/LICENSE)
Copyright (c) 2021 锦阳



<a name="donate"></a>

## 请维护者喝杯咖啡

<img src="https://gitee.com/agile-development-system/agds-doc-preset/raw/master/lib/docs/qrcode/alipay.jpeg" width="209px" >
<img src="https://gitee.com/agile-development-system/agds-doc-preset/raw/master/lib/docs/qrcode/wechatpay.jpeg" width="237px" >




<a name="dingtalk"></a>

## 加入钉钉群讨论或加入开发

<img src="https://gitee.com/agile-development-system/agds-doc-preset/raw/master/lib/docs/qrcode/dingtalk.jpeg" width="188px" >


