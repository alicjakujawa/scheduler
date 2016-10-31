import Koa from 'koa';
import api from './routes';

const app = new Koa();

/*app.use(async (ctx) => {
    ctx.body = 'Hello world';
});*/

app.use(api());
app.listen(3000);
export default app;
