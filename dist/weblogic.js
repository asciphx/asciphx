"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.W = void 0;
var W = {
  Qx: function Qx(req, rep, done) {
    rep.log.info("Middleware is in `src/weblogic.`");
    done();
  },
  Login: function Login(req, rep, next) {
    var _req$session;

    //Session is not configured at the moment,so it will intercept
    if (!((_req$session = req.session) === null || _req$session === void 0 ? void 0 : _req$session.user)) {
      return rep.redirect('/');
    }

    done();
  }
};
exports.W = W;