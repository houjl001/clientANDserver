import Router from 'koa-router';
import * as controller from './home.controller';

const router = new Router();

router
  .get('/home', controller.home)
  .post('/about', controller.about);
export default router;
