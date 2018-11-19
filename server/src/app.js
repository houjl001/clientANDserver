import path from 'path';
import fs from 'fs';
import Koa from 'koa';
import mount from 'koa-mount';
import serve from 'koa-static';
import views from 'koa-views';
import config from './config';
import routes from './router';
import init from './init';

const app = new Koa();
init();
// static
// if (process.env.NODE_ENV !== 'development') {
//   app.use(mount(`/${config.context_path}`, serve(path.join(__dirname, '../vue/dist/'))));
// }
// views
// app.use(views(path.join(__dirname, 'views'), { map: { html: 'ejs' } }));
// 500 handle
// onerror(app, {
//   html: (ctx) => {
//     ctx.status = 500;
//     ctx.body = fs.readFileSync(path.join(__dirname, 'views/error/500.html'), 'utf-8');
//     ctx.type = 'html';
//   }
// });
// routes
app.use(async (ctx, next) => {
  console.log(ctx);
  await next();
});
app.use(mount(`/${config.api_path}`, routes()));
app.use(mount(`/${config.context_path}`, serve(path.join(__dirname, '../static'))));
//app.use(mount(`/${config.context_path}`, serve(path.join(__dirname, '../public'))));
// 404 handle
// app.use(async (ctx) => {
//   ctx.status = 404;
//   await ctx.render('error/404');
// });

// app.on('error', (err, ctx) => {
//   logger.error({ err, method: `${ctx.method}`, path: `${ctx.path}`, params: ctx.params, query: ctx.query, body: ctx.request.body});
// });

export default app;
