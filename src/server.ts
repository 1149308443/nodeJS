import Koa from 'koa';
import logger from 'koa-logger';
import Moment from 'moment';
import config from './config';
import router from './router';
const app = new Koa();

// Logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');

  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// X-response-time
app.use(async (ctx, next) => {
  const start = Date.now();

  await next();
  const ms = Date.now() - start;

  ctx.set('X-Response-Time', `${ms}ms`);
});
// 使用日志中间件
app.use(logger((str) => {
  console.log(Moment().format('YYYY-MM-DD HH:mm:ss') + str);
}));

app.use(router.routes());

app.listen(config.PORT);

console.log('Server running on port 3000');

export default app;
