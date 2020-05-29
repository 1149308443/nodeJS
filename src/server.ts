import Koa from 'koa';
import Router, { IRouterContext } from 'koa-router';
import logger from 'koa-logger';
import Moment from 'moment';

const app = new Koa();
const router = new Router();

router.get('/', (ctx:IRouterContext) => {
  ctx.body = 'Hello World';
});

// 使用日志中间件
app.use(logger((str) => {
  console.log(Moment().format('YYYY-MM-DD HH:mm:ss') + str);
}));

app.use(router.routes());

app.listen(3000);

console.log('Server running on port 3000');

export default app;
