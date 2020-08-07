export const W={
  Qx(req, rep, next){
    rep.log.info("Middleware is in `src/weblogic.`")
    next();
  },
  Login(req, rep, next){//Session is not configured at the moment,so it will intercept
    if (!req.session?.user) {return rep.redirect('/');}next();
  }
}