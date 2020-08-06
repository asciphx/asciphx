# KOA版特性
1. Class类装饰器默认值为 "/"+实体类名 ,当然也可以自定义
2. 自动扫描controller，并且配置Routes路由
3. 自动生成配置路由文件以便查阅，在dist/utils目录下，也可以手动删除，或者去utils/decorator.js下更改代码
4. babel用下一代js语法糖可以巨幅降低代码行数，还可以兼容ts类型检查，而解决ts代码过于沉长的问题
5. 代码写法比较严格，只能在controller层写context的方法，而不是直接return出去那么简单
6. 整合了prettier，可以输入npm run format来格式化代码

## 目录结构
1. dist:`babel编译后的文件`
2. src:`后端文件入口`
3. src/controller:`控制层`
4. src/entity:`实体层`
5. src/service:`服务层`
6. src/migration:`迁移层`
7. src/utils:`工具层`
8. views:`后台ejs模板渲染文件夹`
9. windows-lib:`windows的linux指令包（放系统path变量中或nodejs安装目录下）`

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
2. 请勿将await语法内用插件支持的操作符，可能会导致await失效;
解决方案，await(...)。使用括号包裹，阻止babel翻译失败。

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
2. **保持命名规范**：
controller层下的请尽量保持大小驼峰命名规范