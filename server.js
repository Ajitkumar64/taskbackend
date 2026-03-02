const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(router);

// IMPORTANT: use 0.0.0.0 instead of localhost
// server.listen(3000, "0.0.0.0", () => {
//   console.log("Backend running on http://192.168.1.5:3000");
// });
app.listen(3000, () => {
  console.log("Server running on port 3000");
});