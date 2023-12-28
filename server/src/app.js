const Koa = require('koa');

const app = new Koa();

app.use(ctx => {
    ctx.body = "Hello WORLD"
});

app.listen(3000, () => {
    console.log("KOA SERVER STARTED AND LISTENING ON PORT 3000");
});