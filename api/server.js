const jsonServer = require('json-server');

module.exports = (req, res) => {
  const server = jsonServer.create();
  const router = jsonServer.router('database.json'); // Your mock data file
  const middlewares = jsonServer.defaults();

  server.use(middlewares);
  server.use(router);

  // Handling the request and responding via Vercel's serverless function format
  server.handle(req, res);
};
