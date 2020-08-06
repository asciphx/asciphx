He is a self-taught developer with 3+ years of experience who loves electric playing and programming languages. He has contributed to various open-source projects. Three years ago he fell in like with the ECMAScript programming language, and since then he hasn't cheated on for any other.At the same time, he will also use go, delphi, typescript, Java, etc

# Example how to use [Asciphx中文文档](https://github.com/asciphx/asciphx/blob/master/README-zh_CN.md)
1. clone repository 
2. install `eslint` globlly: `npm i -g eslint@7.6.0`
3. run `npm i`
4. run `npm run build` and `npm start` or directly run `npm run build && npm start`
5. If you want to start while watching, you have to open two terminals.
6. The first one is to run. `npm run watch`. The second one is to run `npm run dev`
7. see `http://localhost:3000/user/str`,This is an example of return string
8. see `http://localhost:3000/user/json`,This is an example of return json
9. Return * or rep.send (*) the effect is the same.Cannot be used at the same time
10. Immediately, I will be releasing high-performance versions of express and KOA just like Fastify

## Points for attention
1. support experimental syntax just like obj::func、?.、??、|>、#、||=、&&=、@decorators、function*、do{...}
2. support strip-types. eg:function foo(one: any, two: number, three?): string {}
3. Patch of Windows users using CP or RM Linux command in `src/windows-lib`
4. What is missing from the schema now is the querystring and headers,but not interferences
5. Request characters will be accurate to case such as `localhost:3000/post`,if`localhost:3000/POst` will not right


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
## Example how to use [TypeORM](https://github.com/typeorm/typeorm)
# Single core test(Mysql8)
## loadtest http://localhost:3000/user/1 -t 10 -c 10 --rps 1000
1. (longest request)=> Fastify 280ms, KOA 401ms, express 649ms
2. Completed requests=> Fastify(9436), KOA(9086), express(8960)
3. Fastify framework performance is faster than the KOA framework