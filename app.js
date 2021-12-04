const Koa = require('koa');
const koaBody = require('koa-body');
// const router = require('./router')
const router = require('./router/users')
const routerBoard = require("./router/boards");
const routerTask = require("./router/tasks");
const {routerGetIdUsers} = require("./router/users");
const {routerGetUsers} = require("./router/users");

const app = new Koa();
app.use(koaBody())
//connect router agree documents
app.use(router.routes())
app.use(router.allowedMethods());

app.use(routerBoard.routes());
app.use(routerBoard.allowedMethods());

app.use(routerTask.routes());
app.use(routerTask.allowedMethods());

app.listen(7542, ()=>{
    console.log('server started in 7542')
});