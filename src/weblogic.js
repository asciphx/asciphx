export const W={
  Qx(req, rep, done){
    rep.log.info("Middleware is in `src/weblogic.`")
    done();
  },
  Login(req, rep, next){//Session is not configured at the moment,so it will intercept
    if (!req.session?.user) {return rep.redirect('/');}done();
  }
}