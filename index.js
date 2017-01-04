const Koa = require('koa');
const app = new Koa();
const port = process.env.PORT || 5000
// response
app.use(ctx => {
  ctx.body = 'Hello Koa';
  console.log('hello...')
});

app.listen(port);
console.log('app running at ' + port)
