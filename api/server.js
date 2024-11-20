const jsonServer = require('json-server');

module.exports = (req, res) => {
  const server = jsonServer.create();
  const router = jsonServer.router('database.json'); // Ensure the path to the database is correct
  const middlewares = jsonServer.defaults();

  server.use(middlewares);
  server.use(router);

  server.handle(req, res); // Properly handle the request via serverless function
};
