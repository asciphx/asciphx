<img align="left" height="142px" src="https://github-readme-stats.vercel.app/api?username=asciphx&show_icons=true&text_color=718096&theme=highcontrast&hide_title=true" />
He is a self-taught developer with 3+ years of experience who loves programming languages. He didn't study hard because someone hit him, and he didn't gain experience. His family background is also very bad which quarrel every day, even make him unable to concentrate, so he can be proficient in each subject that comes without practice and learning and study.
<img align="left" width="100%" height="142px" src="https://github-readme-stats.vercel.app/api/top-langs/?username=asciphx&layout=compact&theme=dark" />

### My frist vscode Plugin extension
![Dark Pro+](./dark%20pro+.jpg)

## [Forum link(论坛链接)](http://8.129.58.72)

## **Asciphx**
> Using Babel + typeorm + MySQL + fastify + gulp to build a architecture, but with the performance of .Net core.
> The plug-in nodemon can also cooperate with other collaborative work to make the development more centralized and focus on writing code

### CLICK ME TO GET [Asciphx中文文档](https://github.com/asciphx/asciphx/blob/master/README-zh_CN.md)

<details>
<summary>Example how to use</summary>

1. clone repository 
2. install `eslint` globlly: `npm i -g eslint@7.6.0`
3. run `npm i`
4. run `npm run build` and `npm start` or directly run `npm run build && npm start`
5. If you want to start while watching, you have to open two terminals.
6. The first one is to run. `npm run watch`. The second one is to run `npm run dev`
7. see `http://localhost:3000/user/str`,This is an example of return string
8. see `http://localhost:3000/user/json`,This is an example of return json
9. Return * or rep.send (*) the effect is the same.Cannot be used at the same time
10. Static routing can use. HTML to avoid conflict with normal routing
<summary>
</details>
<details>
<summary>Advantage</summary>

- **Babel** uses the next generation of JS syntax sugar, which is the most concise and readable code in history
- Support **typeorm**, the best typescript ORM framework, easily write all kinds of logic of Dao layer
- With the blessing of **fastify**, its performance has entered the top five in the world, and its complexity has been further improved, and it can complete the best functions
- **Gulp** can be called the king of automation. With gulp package, the code of Pro environment is more robust, but the volume is smaller
- **Nodemon** can help more friendly development in the dev environment, but it also needs `npm run watch:pro`
- Various plug-ins work together to allow partial use of static type modification and type inference to support back-end development and maintenance
- Modular development makes the application easier to layer and provides an easy-to-use modular management mechanism
- AOP code is written in a low-key way, but it is easy to realize log, interceptor, filter and other functions
- MVC, API, websocket, microservice and other systems are constructed fastest, fastest and most fiercely
<summary>
</details>
<details>
<summary>Points for attention</summary>

1. support experimental syntax just like obj::func、?.、??、|>、#、||=、&&=、@decorators、function*、do{...}
2. support strip-types. eg:function foo(one: any, two: number, three?): string {}
3. Patch of Windows users using CP or RM Linux command in `src/windows-lib`
4. What is missing from the schema now is the querystring and headers,but not interferences
5. Request characters will be accurate to case such as `localhost:3000/post`,if`localhost:3000/POst` will not right
<summary>
</details>
<details>
<summary>How to use CLI</summary>

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
<summary>
</details>
<details>
<summary>loadtest</summary>

run `npm -g loadtest`  
`loadtest http://localhost:3000/user/1 -t 10 -c 10 --rps 1000`
1. (longest request)=> Fastify 280ms, KOA 401ms, express 649ms
2. Completed requests=> Fastify(9436), KOA(9086), express(8960)
3. Fastify framework performance is faster than the KOA framework
<summary>
</details>

### Example how to use [TypeORM](https://github.com/typeorm/typeorm)
