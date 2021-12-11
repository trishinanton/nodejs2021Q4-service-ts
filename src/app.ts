import Koa, { Context} from 'koa';
import koaBody from 'koa-body';
import Router from 'koa-router';

import { routerTask } from './resources/task/task.router';
import { routerBoard } from './resources/board/board.router';
import { router } from './resources/users/user.router';

export const app = new Koa();
const rootRouter = new Router();

rootRouter.get('/', (ctx:Context) => {
  ctx.body = "Service is running!";
})

// const swaggerDocument = swagger.loadDocumentSync(path.join(__dirname, '../doc/api.yaml'));
// app
//   .use(ui(swaggerDocument, "/swagger"))

app.use(koaBody())
  .use(rootRouter.routes())
  .use(rootRouter.allowedMethods())
  .use(router.routes())
  .use(router.allowedMethods())
  .use(routerBoard.routes())
  .use(routerBoard.allowedMethods())
  .use(routerTask.routes())
  .use(routerTask.allowedMethods())

