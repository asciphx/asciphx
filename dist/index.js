"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _typeorm = require("typeorm");

var _fastify = _interopRequireDefault(require("fastify"));

var _fs = _interopRequireDefault(require("fs"));

var _decorator = require("./utils/decorator");

var _controller = require("./controller");

var _tool = require("./utils/tool");

// import {User} from "./entity/User"
(0, _typeorm.createConnection)().then( /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(conn) {
    var app, f, vv, h, _loop, i;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            //`logger:false`disable can make it faster unless you use it in devDependencies
            app = (0, _fastify["default"])({
              logger: false
            }).register(require('point-of-view'), {
              engine: {
                ejs: require('ejs')
              },
              templates: './views'
            }); //use ejs template engine,but in HTML format,it is convenient to use eslint code prompt in HTML

            app.log.info("loading..."); // await app.register(require('middie'))
            // app.use(require('cors')())

            f = [], vv = {}, h = true;
            global.ONCE = true;
            _context.next = 6;
            return _fs["default"].readdirSync(__dirname + "/controller").forEach(function (i) {
              require(__dirname + "/controller/" + i);

              f.push(i);
            });

          case 6:
            _context.next = 8;
            return _fs["default"].readdirSync(__dirname + "/entity").forEach(function (i) {
              var v = {},
                  en = require(__dirname + "/entity/" + i);

              var res = conn.getRepository(en[Object.keys(en)[0]]).metadata.ownColumns;
              res.forEach(function (r) {
                Object.defineProperty(v, r.propertyName, {
                  enumerable: true,
                  configurable: false,
                  value: {
                    type: (0, _tool.sqlCheck)(r.type)
                  }
                });
              });
              vv[i] = v;
              v = null; //reclaiming memory
            });

          case 8:
            _loop = function _loop(i) {
              _decorator.Routes.forEach(function (r) {
                if (r.c.name + ".js" === f[i]) {
                  if (r.p === {}) r.p = vv[r.c.name.replace(/(\w*)[A-Z]\w*/, "$1") + ".js"];else r.p.result = {
                    type: "object",
                    properties: vv[r.c.name.replace(/(\w*)[A-Z]\w*/, "$1") + ".js"]
                  };
                }
              });

              if (i == f.length - 1) h = false;
            };

            for (i in f) {
              _loop(i);
            } // console.log(Routes)


            _decorator.Routes.forEach(function (r) {
              var opts = {
                schema: {
                  response: {
                    200: {
                      type: r.s,
                      properties: r.p
                    }
                  }
                }
              };
              r.w ? opts.preHandler = r.w : undefined;
              app[r.m](r.r, opts, function (req, rep) {
                return new r.c()[r.a](req, rep);
              });
            }); // const u = new User("testman");
            // conn.getRepository(User).save(u).then(u => {
            //   console.log("user has been saved: ", u);
            // });


            app.listen(3000, function (err) {
              if (err) throw err;else console.log("FastifyServer http://localhost:3000 to see");
            });
            f = null;
            vv = null; //reclaiming memory

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}())["catch"](function (error) {
  return console.error("TypeORM connection error: ", error);
});