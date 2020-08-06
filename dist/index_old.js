"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _typeorm = require("typeorm");

var _fastify = _interopRequireWildcard(require("fastify"));

var _fs = _interopRequireDefault(require("fs"));

var _decorator = require("./utils/decorator");

var _controller = require("./controller");

var _tool = require("./utils/tool");

//Very unfortunate old version only support mysql query
(0, _typeorm.createConnection)().then( /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(conn) {
    var app, f, h, dataBase, _loop, i;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            app = (0, _fastify["default"])({
              logger: true
            }).register(require('point-of-view'), {
              engine: {
                ejs: require('ejs')
              },
              templates: './views'
            }); //use ejs template engine,but in HTML format,it is convenient to use eslint code prompt in HTML

            app.log.info("loading..."); // await app.register(require('middie'))
            // app.use(require('cors')())

            f = [];
            h = true;
            _context.next = 6;
            return _fs["default"].readFileSync('./ormconfig.json', function (e) {
              if (e) {
                return console.error(e);
              }
            });

          case 6:
            dataBase = _context.sent;
            dataBase = JSON.parse(dataBase.toString()).database;

            _fs["default"].readdirSync(__dirname + "/controller").forEach(function (i) {
              require(__dirname + "/controller/" + i);

              f.push(i);
            });

            _loop = function _loop(i) {
              var v = {};
              conn.query("SELECT COLUMN_NAME, DATA_TYPE FROM INFORMATION_SCHEMA.COLUMNS\n    WHERE table_name = '".concat(f[i].replace(/(\w*)[A-Z]\w*\.js/, "$1").toLocaleLowerCase(), "'\n    AND table_schema = '").concat(dataBase, "'"), function (err, res) {
                res.forEach(function (r) {
                  Object.defineProperty(v, r.COLUMN_NAME, {
                    enumerable: true,
                    configurable: false,
                    value: {
                      type: (0, _tool.sqlCheck)(r.DATA_TYPE)
                    }
                  });
                });

                _decorator.Routes.forEach(function (r) {
                  if (r.c.name + ".js" === f[i]) r.p = v;
                });

                if (i == f.length - 1) h = false;
                v = null;
              });
            };

            for (i in f) {
              _loop(i);
            }

            _context.next = 13;
            return function fff() {
              setTimeout(function () {
                if (h) return fff();else {
                  // console.log(Routes);
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
                      var c = new r.c()[r.a](req, rep);
                      if (c instanceof Promise) c.then(function (c) {
                        return c !== undefined && c !== null ? rep.send(c) : undefined;
                      });
                    });
                  });

                  app.listen(3000, function (err) {
                    if (err) throw err;else console.log("FastifyServer http://localhost:3000 to see");
                  });
                  f = null; //reclaiming memory
                }
              }, 10);
            }(h);

          case 13:
            return _context.abrupt("return", _context.sent);

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