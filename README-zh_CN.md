# Asciphx
> 使用 Babel + typeORM + Mysql + Fastify + gulp构建，一个类似于Java的SpringBoot架构，但同时具有.net Core的性能。
> 插件nodemon也能配合其他协同工作，让开发更集中，更专注于编写代码。

## 主要特性
- **Babel**使用下一代js语法糖，堪称史上最简洁，代码可读性最棒
- 支持 **TypeORM**，最好的 Typescript ORM 框架，轻松编写 DAO 层的各类逻辑
- **Fastify**加持下，性能进入世界前五，复杂度也进一步提升，并能完成最好的功能
- **gulp**堪称自动化之王，有了gulp打包使得pro环境的代码更健壮，但体积却更加小
- **nodemon**可以帮助在dev环境下，更友好的开发，但也需要先`npm run watch:pro`
- 各种插件联手，允许部分使用静态类型修饰、类型推断，为后端开发和维护提供支持
- 模块化开发，让应用程序更容易分层，提供了易于使用的模块化管理机制
- 最低调编写 AOP 代码，面向切面编程，却轻松实现日志、拦截器、过滤器等功能
- 最快，最迅速，最猛烈构建 MVC、API、websocket、微服务等系统
- ......

## Demo
- [KOA](https://github.com/asciphx/asciphx/tree/master/sample/koa-babel) KOA框架，写起来稍微麻烦但速度兼具的框架🎁
- [express](https://github.com/asciphx/asciphx/tree/master/sample/express-babel) express架构，写起来方便，只是性能稍微略低点🎁

## 特征
- [x] Class类装饰器默认值为 "/"+实体类名 ,当然也可以自定义
- [x] 自动扫描controller目录，并且配置Routes路由
- [x] 自动扫描entity，并且生成schema.properties
- [x] 自动生成配置路由文件以便查阅，在dist/routes目录下，也可删除，或者去src/config.js下更改printRoute为false
- [x] babel用下一代js语法糖可以巨幅降低代码行数，还可以兼容ts类型检查，而解决ts代码过于沉长的问题
- [x] 有几乎相近于C#:.net core架构的速度，还有java:SpringBoot框架的可维护性，前提是关闭日志打印，还有尽可能少用插件
- [x] 如不采用typeORM库，也可以使用Sequelize，并重写entity类，采用index_old.js里面的方式查询数据库获取实体类或者自行查找映射的方法
- [x] 精确到字母大小写的路由，大小写不匹配也会导致无法连接，遗憾的是几乎所有网站路由转成了小写，实战场景似乎较少
- [x] 装饰器中，若是返回的非Object类型，还需在method装饰器第一个参数改数字来判断，在src/config.js的jsonSchema中，并且第二个值会是url
- [x] 还未使用schema中的querystring,headers；如需使用，只能修改src/utils/decorator.js里面的方法，自行想办法添加。使用后估计性能会提升5%


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
10. dist/routes:`输出查看的路由文件，每个controller会创建一个`

## 插件支持
1. such as:obj::func、?.、??、|>、#、||=、&&=、@decorators、function*、do{...}
2. support strip-types. eg:function foo(one: any, two: number, three?): string {}
3. 在fastify的point-of-view组件能让静态路由可采用.html来避免与普通路由发生的冲突

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
3. 需要npm i -g eslint@7.6.0 以便支持内部的语法检查。
4. ormconfig.json中的synchronize，设置为true则自动同步实体类到数据库。

## 注意
1. **如何运行**：
看看有没有全局安装eslint,如果没有也可以安装在本地npm i --save-dev eslint。
请先看配置文件在ormconfig.js，找到mysql需要的数据库，登录并创建该数据库。

先开一个终端`npm run watch`,（以便看到babel编译后的代码）或者`npm run watch:pro`，(gulp编译后代码会被压缩，但是性能会提升)
再开一个新终端`npm run dev`用于运行项目的开发环境。

or
只开一个终端，每次都用`npm run start:build`，但这就不是实时编译了,而且可能会慢。
```json
    "build": "rm -rf dist && babel src -d dist --no-comments",
    "build:pro": "rm -rf dist && gulp build",
    "old": "node dist/index_old.js",
    "start": "node dist/index.js",
    "start:build": "babel src --out-dir dist --no-comments && node dist/index.js",
    "watch": "rm -rf dist && babel src --watch --out-dir dist --no-comments",
    "watch:pro": "rm -rf dist && gulp build && gulp watch",
    "dev": "nodemon"
```
2. **保持命名规范**：
controller层下的请尽量保持大小驼峰命名规范
3. **暂时没有查询验证**：
在schema中缺少的是querystring,headers,但是不会影响使用,可以自行添加
schema验证目前采用src/util/tool下的ctx方法，得配合@Ctx一起使用，才行
Fastify也是作为世界排名前五的服务端框架之一，前五还有iris，有.net core
虽然Fastfify并不是最快的，但是论扩展和可维护性，代码可读性都非常强
KOA和express版本的Babel框架已经出品，在sample目录
4. **请赞助本项目**：
如你觉有收获，请给我打赏

![微信打赏](http://www.91huanwei.com/1.jpg)
![支付宝打赏](http://www.91huanwei.com/0.jpg)
