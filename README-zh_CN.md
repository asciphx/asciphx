# 目录结构
1. dist:`babel编译后的文件`
2. src:`后端文件入口`
3. src/controller:`控制层`
4. src/entity:`实体层`
5. src/migration:`迁移层`
6. src/utils:`工具层`

## 插件支持
1. such as:obj::func、?.、??、|>、#、||=、&&=、@decorators、function*、do{...}
2. support strip-types. eg:function foo(one: any, two: number, three?): string {}

## 需要更改的配置
1. vsCode settings:
```json
    "emmet.includeLanguages": {
        "vue-html": "html",
        "javascript": "javascriptreact"
    },
    "javascript.validate.enable": false,
```

## 注意
1. **如何运行**：
先开一个终端npm run watch,（以便看到babel编译后的代码）
再开一个新终端 npm run dev用于运行项目的开发环境。
or
只开一个终端，每次都用npm start，但这就不是实时编译了。
```json
    "watch": "babel src --watch --out-dir dist",
    "dev": "node dist/index.js",
    "start": "babel src --out-dir dist && node dist/index.js"
```
2. **请点赞本项目**：
当star数超过个位，项目将发布源代码