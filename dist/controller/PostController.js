"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PostController = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _typeorm = require("typeorm");

var _Post = require("../entity/Post");

var _decorator = require("../utils/decorator");

var _weblogic = require("../weblogic");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _temp;

//this is only controller,not have service
var PostController = (_dec = (0, _decorator.Class)(), _dec2 = (0, _decorator.Roles)([_weblogic.W.Qx]), _dec3 = (0, _decorator.Get)(1), _dec4 = (0, _decorator.Roles)([_weblogic.W.Qx]), _dec5 = (0, _decorator.Get)(0, "/:id"), _dec6 = (0, _decorator.Roles)([_weblogic.W.Qx]), _dec7 = (0, _decorator.Post)(), _dec8 = (0, _decorator.Roles)([_weblogic.W.Qx]), _dec9 = (0, _decorator.Put)("/:id"), _dec10 = (0, _decorator.Roles)([_weblogic.W.Qx]), _dec11 = (0, _decorator.Del)("/:id"), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function () {
  function PostController() {
    (0, _classCallCheck2["default"])(this, PostController);
    this.postEntity = (0, _typeorm.getRepository)(_Post.Post);
  }

  (0, _createClass2["default"])(PostController, [{
    key: "all",
    value: function () {
      var _all = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, rep) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = rep;
                _context.next = 3;
                return this.postEntity.find();

              case 3:
                _context.t1 = _context.sent;

                _context.t0.send.call(_context.t0, _context.t1);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function all(_x, _x2) {
        return _all.apply(this, arguments);
      }

      return all;
    }()
  }, {
    key: "one",
    value: function () {
      var _one = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, rep) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.postEntity.findOne(req.params.id);

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function one(_x3, _x4) {
        return _one.apply(this, arguments);
      }

      return one;
    }()
  }, {
    key: "save",
    value: function () {
      var _save = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, rep) {
        var addPost;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.postEntity.create(req.body);

              case 2:
                addPost = _context3.sent;
                _context3.t0 = rep;
                _context3.next = 6;
                return this.postEntity.save(addPost);

              case 6:
                _context3.t1 = _context3.sent;

                _context3.t0.send.call(_context3.t0, _context3.t1);

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function save(_x5, _x6) {
        return _save.apply(this, arguments);
      }

      return save;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, rep) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.t0 = rep;
                _context4.next = 3;
                return this.postEntity.update(req.params.id, req.body);

              case 3:
                _context4.t1 = _context4.sent;

                _context4.t0.send.call(_context4.t0, _context4.t1);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function update(_x7, _x8) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "remove",
    value: function () {
      var _remove = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, rep) {
        var rmPost;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.postEntity.findOne(req.params.id);

              case 2:
                rmPost = _context5.sent;
                _context5.t0 = rep;
                _context5.next = 6;
                return this.postEntity.remove(rmPost);

              case 6:
                _context5.t1 = _context5.sent;

                _context5.t0.send.call(_context5.t0, _context5.t1);

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function remove(_x9, _x10) {
        return _remove.apply(this, arguments);
      }

      return remove;
    }()
  }]);
  return PostController;
}(), _temp), ((0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "all", [_dec2, _dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "all"), _class2.prototype), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "one", [_dec4, _dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "one"), _class2.prototype), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "save", [_dec6, _dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "save"), _class2.prototype), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "update", [_dec8, _dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "update"), _class2.prototype), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "remove", [_dec10, _dec11], Object.getOwnPropertyDescriptor(_class2.prototype, "remove"), _class2.prototype)), _class2)) || _class);
exports.PostController = PostController;