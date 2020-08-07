He is a self-taught developer with 3+ years of experience who loves electric playing and programming languages. He has contributed to various open-source projects. Three years ago he fell in like with the ECMAScript programming language, and since then he hasn't cheated on for any other.At the same time, he will also use go, delphi, typescript, Java, etc

# **Asciphx**
> Using Babel + typeorm + MySQL + KOA + gulp to build a spring boot architecture similar to Java, but with the performance of .Net core.
> The plug-in nodemon can also cooperate with other collaborative work to make the development more centralized and focus on writing code

# Example how to use [Asciphx中文文档](https://github.com/asciphx/asciphx/blob/master/README-zh_CN.md)
1. clone repository 
2. install `eslint` globlly: `npm i -g eslint@7.6.0`
3. run `npm i`
4. run `npm run build` and `npm start` or directly run `npm run build && npm start`
5. If you want to start while watching, you have to open two terminals.
6. And the first one is to run `npm run watch`. The second one is to run `npm run dev`

## Advantage
- **Babel** uses the next generation of JS syntax sugar, which is the most concise and readable code in history
- Support **typeorm**, the best typescript ORM framework, easily write all kinds of logic of Dao layer
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
# Single core test(Mysql8)
## loadtest http://localhost:3000/user/1 -t 10 -c 10 --rps 1000
1. (longest request)=> Fastify 280ms, KOA 401ms, express 649ms
2. Completed requests=> Fastify(9436), KOA(9086), express(8960)