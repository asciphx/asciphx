"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Admin = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _typeorm = require("typeorm");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp;

var Admin = (_dec = (0, _typeorm.Entity)(), _dec2 = (0, _typeorm.PrimaryGeneratedColumn)(), _dec3 = (0, _typeorm.Column)("varchar", {
  length: 25,
  name: "username"
}), _dec4 = (0, _typeorm.Column)("varchar"), _dec5 = (0, _typeorm.Column)("varchar", {
  name: "name"
}), _dec6 = (0, _typeorm.Column)("varchar"), _dec(_class = (_class2 = (_temp = function Admin(a, b) {
  var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : a;
  var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
  (0, _classCallCheck2["default"])(this, Admin);
  (0, _initializerDefineProperty2["default"])(this, "id", _descriptor, this);
  (0, _initializerDefineProperty2["default"])(this, "username", _descriptor2, this);
  (0, _initializerDefineProperty2["default"])(this, "password", _descriptor3, this);
  (0, _initializerDefineProperty2["default"])(this, "name", _descriptor4, this);
  (0, _initializerDefineProperty2["default"])(this, "photo", _descriptor5, this);
  this.username = a;
  this.password = b;
  this.name = c;
  this.photo = d;
}, _temp), (_descriptor = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "id", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "username", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "password", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "name", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "photo", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.Admin = Admin;