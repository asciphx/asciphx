"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Controller = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _tool = require("./utils/tool");

var _decorator = require("./utils/decorator");

var _dec, _dec2, _dec3, _dec4, _class, _class2;

var //default is `/`
Controller = (_dec = (0, _decorator.Class)(), _dec2 = (0, _decorator.Get)(), _dec3 = (0, _decorator.Get)("login"), _dec4 = (0, _decorator.Get)("register"), _dec(_class = (_class2 = /*#__PURE__*/function () {
  function Controller() {
    (0, _classCallCheck2["default"])(this, Controller);
  }

  (0, _createClass2["default"])(Controller, [{
    key: "index",
    //index.html
    value: function index(req, rep) {
      (0, _tool.html)(req, rep, {
        test: "test",
        author: "asciphx"
      });
    } //login.html

  }, {
    key: "login",
    value: function login(req, rep) {
      (0, _tool.html)(req, rep, {
        test: "test",
        author: "Login"
      });
    } //register.html

  }, {
    key: "register",
    value: function register(req, rep) {
      (0, _tool.html)(req, rep, {
        test: "test",
        author: "Register"
      });
    }
  }]);
  return Controller;
}(), ((0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "index", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "index"), _class2.prototype), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "login", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "login"), _class2.prototype), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "register", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "register"), _class2.prototype)), _class2)) || _class);
exports.Controller = Controller;