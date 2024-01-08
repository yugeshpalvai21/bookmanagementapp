const Koa = require('koa');
const path = require('path');
const serve = require('koa-static');

const app = new Koa();

app.use(serve(path.join(__dirname, '..', 'public')));

app.listen(3000, () => {
    console.log("APP is running successfully on port 3000");
});