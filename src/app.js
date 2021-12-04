const Koa = require('koa');
const koaBody = require('koa-body');
const path = require('path');
const json = require('koa-json');
const swagger = require("swagger2");
const { ui } = require("swagger2-koa");
const router = require('./resources/users/user.router');
const routerBoard = require('./resources/board/board.router');
const routerTask = require('./resources/task/task.router');

const app = new Koa();
app.use(koaBody())
const swaggerDocument = swagger.loadDocumentSync(path.join(__dirname, '../doc/api.yaml'));

app.use(json());

app
  .use(ui(swaggerDocument, "/swagger"))

app
  .use(router.routes())
  .use(routerBoard.routes())
  .use(routerTask.routes())
  .use(router.allowedMethods());

module.exports = app;
