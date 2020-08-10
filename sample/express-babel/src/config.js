export const Config={
  printRoute:true,//Output routing JSON file in 'dist/routes'
  port:3000,
  upload:"upload",
  dbLog:"log.db",
  jsonLimit:"1mb",
  session:{
    name:"asciphx",
    secret:'ياخشى',
    cookie:{
      path:"/",
      httpOnly:true,
      originalMaxAge:1500000
    }
  }
}