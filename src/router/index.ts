
import Router from 'koa-router';
// Import { ParameterizedContext } from 'koa';
const router = new Router();

router.get('/', (ctx) => {
  ctx.body = 'Hello World';
});

// 未知路由
// Router.get('*', async (ctx:ParameterizedContext) => {
//   Await ctx.render('error');
// });
export default router;
