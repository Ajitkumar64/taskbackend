const jsonServer = require("json-server");

const app = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

app.use(middlewares);
app.use(jsonServer.bodyParser);
app.use(router);

module.exports = app;