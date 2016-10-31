import Router from 'koa-router';
import Gym from '../models/Gym';

export default (router) => {
  router
    .get('/gyms',
      async ctx => {
        const gyms = await Gym.fetchAll();
        ctx.body = gyms.toJSON();
      });
};
