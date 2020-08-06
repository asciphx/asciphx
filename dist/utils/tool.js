"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fileAction = exports.deleteOne = exports.deleteAll = exports.readFileList = exports.sqlCheck = exports.suffix = exports.html = exports.ctx = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _fastify = require("fastify");

var _fs = _interopRequireDefault(require("fs"));

var _url = _interopRequireDefault(require("url"));

var _this = void 0;

var ctx = function ctx(obj) {
  var o;
  obj === null ? o = {} : o = {
    result: obj
  };

  for (var _len = arguments.length, arr = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    arr[_key - 1] = arguments[_key];
  }

  Object.assign.apply(Object, [o].concat(arr));
  return o;
};

exports.ctx = ctx;

var html = function html(req, rep) {
  var u = _url["default"].parse(req.url).path.replace(/^\//, '');

  for (var _len2 = arguments.length, obj = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    obj[_key2 - 2] = arguments[_key2];
  }

  rep.view.apply(rep, [u === "" ? u = "index.html" : u = u + ".html"].concat(obj));
};

exports.html = html;

var suffix = function suffix(name) {
  return String(name).replace(/().*(?=)\./, '\.');
};

exports.suffix = suffix;

var sqlCheck = function sqlCheck(str) {
  if (/int/.test(str)) return "number";
  if (/text|char/.test(str)) return "string";
  return "number";
};

exports.sqlCheck = sqlCheck;

var readFileList = function readFileList(path, filesList) {
  _fs["default"].readdirSync(path).forEach(function (itm, index) {
    var stat = _fs["default"].statSync(path + itm);

    if (stat.isDirectory()) {
      _this.readFileList(path + itm + "/", filesList);
    } else {
      filesList.push(path + itm);
    }
  });
};

exports.readFileList = readFileList;

var deleteAll = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(path) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            path.slice(-1) === "/" ? undefined : path = path + "/";

            _fs["default"].readdirSync(path).forEach(function (itm) {
              _fs["default"].unlinkSync(path + itm);
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function deleteAll(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.deleteAll = deleteAll;

var deleteOne = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(path) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (_fs["default"].existsSync(path)) _fs["default"].unlinkSync(path);

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function deleteOne(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.deleteOne = deleteOne;

var fileAction = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(request, response) {
    var filesList;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            filesList = new Array();
            _context3.next = 3;
            return _this.readFileList(request.query.path, filesList);

          case 3:
            _context3.next = 5;
            return response.send(filesList);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function fileAction(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();

exports.fileAction = fileAction;