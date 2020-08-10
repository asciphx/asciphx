# **koa-babel**
> Using Babel + typeorm + MySQL + KOA + gulp to build a spring boot architecture similar to Java, but with the performance of nestjs.
> The plug-in nodemon can also cooperate with other collaborative work to make the development more centralized and focus on writing code
> pm2 support,and static router use ".html" suffix
> If the dist folder is the latest one compiled last time, you can use the first terminal 'gulp watch' and the second terminal 'NPM run dev'.

# Example how to use [koa-babel中文文档](https://github.com/asciphx/asciphx/sample/koa-babel/README-zh_CN.md)
1. clone repository 
2. install `eslint` globlly: `npm i -g eslint@7.6.0`
3. run `npm i`
4. run `npm run build` and `npm start` or directly run `npm run build && npm start`
5. If you want to start while watching, you have to open two terminals.
6. And the first one is to run `npm run watch`. The second one is to run `npm run dev`

## Advantage
- **Babel** uses the next generation of JS syntax sugar, which is the most concise and readable code in history
- Support **typeorm**, the best typescript ORM framework, easily write all kinds of logic of Dao layer
- **prettier** can format the code in SRC directory, which is a plug-in to enhance readability
- **Gulp** can be called the king of automation. With gulp package, the code of Pro environment is more robust, but the volume is smaller
- **Nodemon** can help more friendly development in the dev environment, but it also needs `npm run watch:pro`
- Various plug-ins work together to allow partial use of static type modification and type inference to support back-end development and maintenance
- Modular development makes the application easier to layer and provides an easy-to-use modular management mechanism
- AOP code is written in a low-key way, but it is easy to realize log, interceptor, filter and other functions
- MVC, API, websocket, microservice and other systems are constructed fastest, fastest and most fiercely
## Support experimental syntax
1. such as:obj::func、?.、??、|>、#、||=、&&=、@decorators、function*、do{...}
2. support strip-types. eg:function foo(one: any, two: number, three?): string {}

## How to use CLI?
1. run `eslint --init` to create .eslintrc.js(If eslintrc.js file does not exist)
2. install `typeorm` globally: `npm i -g typeorm`
3. run `typeorm -h` to show list of available commands
4. vsCode settings:
```json
    "emmet.includeLanguages": {
        "vue-html": "html",
        "javascript": "javascriptreact"
    },
    "javascript.validate.enable": false,
```
5. Patch of Windows users using CP or RM Linux command in `src/windows-lib`

## Example how to use [TypeORM](https://github.com/typeorm/typeorm)