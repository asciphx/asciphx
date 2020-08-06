"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdminService = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _typeorm = require("typeorm");

var _Admin = require("../entity/Admin");

var AdminService = /*#__PURE__*/function () {
  function AdminService() {
    (0, _classCallCheck2["default"])(this, AdminService);
    this.admin = (0, _typeorm.getRepository)(_Admin.Admin);
  }

  (0, _createClass2["default"])(AdminService, [{
    key: "all",
    value: function () {
      var _all = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.admin.find();

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function all() {
        return _all.apply(this, arguments);
      }

      return all;
    }()
    /** search one
     * @param id userid
     */

  }, {
    key: "one",
    value: function () {
      var _one = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.admin.findOne(id);

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function one(_x) {
        return _one.apply(this, arguments);
      }

      return one;
    }()
    /** save one
     * @param obj
     */

  }, {
    key: "save",
    value: function () {
      var _save = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(obj) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.admin.save(obj);

              case 2:
                return _context3.abrupt("return", _context3.sent);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function save(_x2) {
        return _save.apply(this, arguments);
      }

      return save;
    }()
    /** update one
     * @param id
     * @param obj
     */

  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id, obj) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.admin.update(id, obj);

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function update(_x3, _x4) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
    /** remove one
     * @param id
     */

  }, {
    key: "remove",
    value: function () {
      var _remove = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
        var rm;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.admin.findOne(id);

              case 2:
                rm = _context5.sent;
                _context5.next = 5;
                return this.admin.remove(rm);

              case 5:
                return _context5.abrupt("return", _context5.sent);

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function remove(_x5) {
        return _remove.apply(this, arguments);
      }

      return remove;
    }()
  }]);
  return AdminService;
}();

exports.AdminService = AdminService;