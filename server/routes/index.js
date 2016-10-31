import compose from 'koa-compose';
import Router from 'koa-router';

import RouterGyms from './gyms';

export default function api() {
  const router = new Router({
    prefix: '/api'
  });

  RouterGyms(router);
  /*outer.get('*', async (ctx, next) => {
    ctx.body = { status : 404 }
  });*/

  return compose([
    router.routes(),
    router.allowedMethods(),
  ]);
}
