const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// use default middleware
server.use(middlewares);

// parse JSON body
server.use(jsonServer.bodyParser);

// use router
server.use(router);

// export server for Vercel
module.exports = server;