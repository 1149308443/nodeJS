
import Router from 'koa-router';
import { ParameterizedContext } from 'koa';
import { models } from '../mysql';
const { user } = models;
const router = new Router();

router.get('/', (ctx) => {
  ctx.body = 'Hello World';
});

router.get('/user', async (ctx: ParameterizedContext) => {
  const params = ctx.query;

  console.log('hhhhhhhhhh', ctx.cookies);

  const cook = ctx.cookies.get('ycas_token');

  console.log('ccccccc', cook);

  const res = await user.create({
    ...params
  });

  ctx.body = res;

});

// 未知路由
// Router.get('*', async (ctx:ParameterizedContext) => {
//   Await ctx.render('error');
// });
export default router;
