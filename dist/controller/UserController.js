"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserController = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _decorator = require("../utils/decorator");

var _weblogic = require("../weblogic");

var _UserService = require("../service/UserService");

var _tool = require("../utils/tool");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _temp;

var UserController = (_dec = (0, _decorator.Class)(), _dec2 = (0, _decorator.Roles)([_weblogic.W.Qx]), _dec3 = (0, _decorator.Get)(2, "/str"), _dec4 = (0, _decorator.Roles)([_weblogic.W.Qx]), _dec5 = (0, _decorator.Ctx)({
  etc: 2
}, {
  code: 3
}), _dec6 = (0, _decorator.Get)(0, "/json"), _dec7 = (0, _decorator.Roles)([_weblogic.W.Qx]), _dec8 = (0, _decorator.Get)(1), _dec9 = (0, _decorator.Roles)([_weblogic.W.Qx]), _dec10 = (0, _decorator.Get)("/:id"), _dec11 = (0, _decorator.Post)(), _dec12 = (0, _decorator.Roles)([_weblogic.W.Qx]), _dec13 = (0, _decorator.Put)("/:id"), _dec14 = (0, _decorator.Roles)([_weblogic.W.Qx]), _dec15 = (0, _decorator.Del)("/:id"), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function () {
  function UserController() {
    (0, _classCallCheck2["default"])(this, UserController);
    this.userSvc = new _UserService.UserService();
  }

  (0, _createClass2["default"])(UserController, [{
    key: "str",
    value: function () {
      var _str = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, rep) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", "dhsdhdsh");

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function str(_x, _x2) {
        return _str.apply(this, arguments);
      }

      return str;
    }()
  }, {
    key: "json",
    value: function () {
      var _json = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, rep) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", (0, _tool.ctx)(null, {
                  etc: "json",
                  code: 200
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function json(_x3, _x4) {
        return _json.apply(this, arguments);
      }

      return json;
    }()
  }, {
    key: "all",
    value: function () {
      var _all = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, rep) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.userSvc.all();

              case 2:
                return _context3.abrupt("return", _context3.sent);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function all(_x5, _x6) {
        return _all.apply(this, arguments);
      }

      return all;
    }()
  }, {
    key: "one",
    value: function () {
      var _one = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, rep) {
        var _req$params$id;

        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _req$params$id = req.params.id, this.userSvc.one(_req$params$id);

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function one(_x7, _x8) {
        return _one.apply(this, arguments);
      }

      return one;
    }()
  }, {
    key: "save",
    value: function () {
      var _save = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, rep) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.t0 = rep;
                _context5.next = 3;
                return this.userSvc.save(req.body);

              case 3:
                _context5.t1 = _context5.sent;

                _context5.t0.send.call(_context5.t0, _context5.t1);

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function save(_x9, _x10) {
        return _save.apply(this, arguments);
      }

      return save;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, rep) {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.t0 = rep;
                _context6.next = 3;
                return this.userSvc.update(req.params.id, req.body);

              case 3:
                _context6.t1 = _context6.sent;

                _context6.t0.send.call(_context6.t0, _context6.t1);

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function update(_x11, _x12) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "remove",
    value: function () {
      var _remove = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, rep) {
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.t0 = rep;
                _context7.next = 3;
                return this.userSvc.remove(req.params.id);

              case 3:
                _context7.t1 = _context7.sent;

                _context7.t0.send.call(_context7.t0, _context7.t1);

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function remove(_x13, _x14) {
        return _remove.apply(this, arguments);
      }

      return remove;
    }()
  }]);
  return UserController;
}(), _temp), ((0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "str", [_dec2, _dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "str"), _class2.prototype), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "json", [_dec4, _dec5, _dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "json"), _class2.prototype), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "all", [_dec7, _dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "all"), _class2.prototype), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "one", [_dec9, _dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "one"), _class2.prototype), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "save", [_dec11], Object.getOwnPropertyDescriptor(_class2.prototype, "save"), _class2.prototype), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "update", [_dec12, _dec13], Object.getOwnPropertyDescriptor(_class2.prototype, "update"), _class2.prototype), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "remove", [_dec14, _dec15], Object.getOwnPropertyDescriptor(_class2.prototype, "remove"), _class2.prototype)), _class2)) || _class);
exports.UserController = UserController;