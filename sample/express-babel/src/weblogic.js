export const W={
  Qx(req, res, next){
      next();
  },
  Login(req, res, next){
      if (!req.session?.user) {req.flash('err','未登录');console.log("not login!");return res.redirect('/');}next();
  },
  UnLogin(req, res, next){
      if (req.session?.user) {req.flash('err','您已登录');}console.log("is login!");next();
  },
  Ban(req, res, next){
      if (req.session?.user) {req.flash('err','您被禁止访问');console.log("is ban!");return res.redirect('back');}next();
  },
  Ajax(req, res, next){
      if (!req.session?.user) {return res.json({status:1});}next();
  },
  AjaxIe(req, res, next){
      if (!req.session?.user) {return res.send('{"status":"1"}');}next();
  }
}
// const pipe = (...fns) => (arg) => fns.reduce((res, fn) => fn.call(null, res), arg);