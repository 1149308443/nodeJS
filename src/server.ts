import Koa from 'koa';
import path from 'path';
import logger from 'koa-logger';
import cors from 'koa2-cors';
import KoaStatic from 'koa-static';
import bodyParser from 'koa-bodyparser';
import Moment from 'moment';
import config from './config';
import router from './router';
import models from './models';

const app = new Koa();

// 数据库连接
models.init();

// 使用日志中间件 koa-logger
app.use(logger((str) => {
  console.log(Moment().format('YYYY-MM-DD HH:mm:ss') + str);
}));

// 静态资源中间件 koa-static
const staticPath = path.join(__dirname, '../static');

app.use(KoaStatic(staticPath));

// 获取post 数据 koa-bodyparser
app.use(bodyParser());

// 解决跨域中间件 koa2-cors
app.use(cors({
  origin() { // 设置允许来自指定域名请求
    // console.log(ctx);
    // const whiteList = ['http://localhost:3000', 'http://localhost:8080']; // 可跨域白名单
    // const url = ctx.header.referer.substr(0, ctx.header.referer.length - 1);

    // console.log(ctx.header);
    // if(whiteList.includes(url)) {
    //   return url; // 注意，这里域名末尾不能带/，否则不成功，所以在之前我把/通过substr干掉了
    // }
    return 'http://localhost:8080'; // 只允许http://localhost:8080这个域名的请求
  },
  // maxAge: 5, // 指定本次预检请求的有效期，单位为秒。
  credentials: true // 是否允许发送Cookie
  // allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // 设置所允许的HTTP请求方法
  // allowHeaders: ['Content-Type', 'Authorization', 'Accept'] // 设置服务器支持的所有头信息字段
  // ExposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] // 设置获取其他自定义字段
}));

// 路由 koa-router
app.use(router.routes())
  .use(router.allowedMethods());

app.listen(config.PORT);

console.log('Server running on port 3000');

app.on('error', (err) => {
  console.log('server error', err);
});

export default app;
