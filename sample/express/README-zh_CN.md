# Asciphx
> 使用 Babel + typeORM + Mysql + express + gulp构建，一个类似于Java的SpringBoot架构，但同时具有.net Core的性能。
> 插件nodemon也能配合其他协同工作，让开发更集中，更专注于编写代码。

## 主要特性
- **Babel**使用下一代js语法糖，堪称史上最简洁，代码可读性最棒
- 支持 **TypeORM**，最好的 Typescript ORM 框架，轻松编写 DAO 层的各类逻辑
- **gulp**堪称自动化之王，有了gulp打包使得pro环境的代码更健壮，但体积却更加小
- **nodemon**可以帮助在dev环境下，更友好的开发，但也需要先`npm run watch:pro`
- 各种插件联手，允许部分使用静态类型修饰、类型推断，为后端开发和维护提供支持
- 模块化开发，让应用程序更容易分层，提供了易于使用的模块化管理机制
- 最低调编写 AOP 代码，面向切面编程，却轻松实现日志、拦截器、过滤器等功能
- 最快，最迅速，最猛烈构建 MVC、API、websocket、微服务等系统
- ......

## express特性
- [x] Class类装饰器默认值为 "/"+实体类名 ,当然也可以自定义
- [x] 自动扫描controller，并且配置Routes路由
- [x] 自动生成配置路由文件以便查阅，在dist/utils目录下，也可以手动删除，或者去utils/decorator.js下更改代码
- [x] babel用下一代js语法糖可以巨幅降低代码行数，还可以兼容ts类型检查，而解决ts代码过于沉长的问题
- [x] express可以很方便的在controller中书写，既可以返回promise也可以返回object，array，string等
- [x] 最适合MVC架构，代码量最少，写法很随意，然而代价是性能会比KOA慢5%
- [x] 整合了session，prettier，也可以输入npm run format来格式化代码


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
只开一个终端，每次都用npm run start:build，但这就不是实时编译了。
```json
    "format": "prettier --write \"src/**/*.js\"",
    "build": "rm -rf dist && babel src -d dist --no-comments",
    "build:pro": "rm -rf dist && gulp build",
    "start": "node dist/index.js",
    "start:build": "babel src --out-dir dist --no-comments && node dist/index.js",
    "watch": "rm -rf dist && babel src --watch --out-dir dist --no-comments",
    "watch:pro": "rm -rf dist && gulp build && gulp watch",
    "dev": "nodemon"
```
2. **保持命名规范**：
controller层下的请尽量保持大小驼峰命名规范