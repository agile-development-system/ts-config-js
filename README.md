# @agds/ts-config-js
**版本** ：1.0.0

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

 <!-- 渲染后缀内容  -->



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



