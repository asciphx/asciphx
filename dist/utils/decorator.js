"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Roles = exports.Del = exports.Put = exports.Post = exports.Get = exports.Class = exports.Ctx = exports.Routes = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function (_e) { function e(_x) { return _e.apply(this, arguments); } e.toString = function () { return _e.toString(); }; return e; }(function (e) { throw e; }), f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function (_e2) { function e(_x2) { return _e2.apply(this, arguments); } e.toString = function () { return _e2.toString(); }; return e; }(function (e) { didErr = true; err = e; }), f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var fs = require('fs'),
    path = require('path');

var JSONSCHEMA = require('../config').Config.jsonSchema;

var RECORDROUTE = require('../config').Config.printRoute;

var Routes = [],
    $s,
    $b = true;
exports.Routes = Routes;

var Class = function Class(v) {
  return function (_class) {
    var _v;

    var i = 0,
        a = [];
    if (v === "" || typeof v === "number") v = null;
    v = (_v = v) !== null && _v !== void 0 ? _v : _class.name.replace(/(\w*)[A-Z]\w*/, "/$1").toLocaleLowerCase();

    var _iterator = _createForOfIteratorHelper(Routes),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var r = _step.value;

        if (r.c === _class.name) {
          i = 1;
          r.c = _class;
          r.r = v + r.r;
          a.push(r);
        } else if (i === 1) i = 2;

        if (i === 2) break;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (RECORDROUTE) {
      if (global.ONCE) {
        $b = fs.existsSync("./dist/routes/");
        global.ONCE = false;
      } else $b = true;

      !$b && fs.mkdir("./dist/routes/", function (err) {
        if (err) {
          return console.error(e);
        }

        fs.writeFile(path.resolve("./dist/routes", "./".concat(_class.name, ".json")), JSON.stringify(a, ['r', 'm', 'a'], "\t"), 'utf8', function (e) {
          if (e) console.error(e);
        });
      });
      $b && v !== "/" && fs.writeFile(path.resolve("./dist/routes", "./".concat(_class.name, ".json")), JSON.stringify(a, ['r', 'm', 'a'], "\t"), 'utf8', function (e) {
        if (e) console.error(e);
      });
    }

    a = null;
  };
}; //jsonSchema now support defalut:"object",1:"array",2:"string",3:"number",etc.
//@Schema only on top of the other decorate except for @Roles,You can customize the return properties of the schema


exports.Class = Class;

var Ctx = function Ctx() {
  for (var _len = arguments.length, i = new Array(_len), _key = 0; _key < _len; _key++) {
    i[_key] = arguments[_key];
  }

  return function (target, key, desc) {
    var f = {
      result: {
        type: "object"
      }
    };

    for (var _i = 0, _arr = [].concat(i); _i < _arr.length; _i++) {
      var p = _arr[_i];
      Object.defineProperty(f, Object.keys(p)[0], {
        enumerable: true,
        configurable: false,
        value: {
          type: JSONSCHEMA[p[Object.keys(p)[0]]]
        }
      });
    }

    Routes[Routes.length - 1].p = f;
  };
};

exports.Ctx = Ctx;

var Get = function Get(p, r) {
  return function (target, key, desc) {
    typeof p === "string" ? $s = p : $s = "";
    Routes.push({
      c: target.constructor.name,
      a: key,
      m: "get",
      r: r !== null && r !== void 0 ? r : $s,
      s: typeof p === "number" ? JSONSCHEMA[p] : "object",
      p: {}
    });
  };
};

exports.Get = Get;

var Post = function Post(p, r) {
  return function (target, key, desc) {
    typeof p === "string" ? $s = p : $s = "";
    Routes.push({
      c: target.constructor.name,
      a: key,
      m: "post",
      r: r !== null && r !== void 0 ? r : $s,
      s: typeof p === "number" ? JSONSCHEMA[p] : "object",
      p: {}
    });
  };
};

exports.Post = Post;

var Put = function Put(p, r) {
  return function (target, key, desc) {
    typeof p === "string" ? $s = p : $s = "";
    Routes.push({
      c: target.constructor.name,
      a: key,
      m: "put",
      r: r !== null && r !== void 0 ? r : $s,
      s: typeof p === "number" ? JSONSCHEMA[p] : "object",
      p: {}
    });
  };
};

exports.Put = Put;

var Del = function Del(p, r) {
  return function (target, key, desc) {
    typeof p === "string" ? $s = p : $s = "";
    Routes.push({
      c: target.constructor.name,
      a: key,
      m: "delete",
      r: r !== null && r !== void 0 ? r : $s,
      s: typeof p === "number" ? JSONSCHEMA[p] : "object",
      p: {}
    });
  };
};

exports.Del = Del;

var Roles = function Roles(r) {
  return function (target, key, desc) {
    var f = Routes[Routes.length - 1];

    if (f.w) {
      f.w = [].concat((0, _toConsumableArray2["default"])(f.w), (0, _toConsumableArray2["default"])(r));
    } else {
      f.w = (0, _toConsumableArray2["default"])(r);
    }

    ;
    f = null;
  };
};

exports.Roles = Roles;