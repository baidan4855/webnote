const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
  ctx.body = 'Hello Koa';
  console.log('hello...')
});

app.listen(3000);
console.log('app running at 3000')
