const Koa = require('koa');
const mount = require('koa-mount');
const { graphqlHTTP } = require('koa-graphql');
const serve = require('koa-static');
const schema = require('./graphql/schema');

const path = require('path');

// require and import local .env credentials
const dotenv = require('dotenv');
dotenv.config();

// setup port based on environment
const PORT = process.env.NODE_ENV == 'development' ? process.env.DEV_PORT : 8000;

// configure app routes and run server
const app = new Koa();


app.use(serve(path.join(__dirname, '..', 'public')));

app.use(mount('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
})));

app.listen(PORT, () => {
    console.log(`APP is running successfully on port ${PORT}`);
});