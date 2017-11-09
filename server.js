require('babel-register');

const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ReactRouter = require('react-router-dom');
const _ = require('lodash');
const fs = require('fs');
const App = require('./js/App').default;

const StaticRouter = ReactRouter.StaticRouter;
const port = 8080;
const baseTemplate = fs.readFileSync('./index.html'); // sync okay bc done once on startup
const template = _.template(baseTemplate);

const server = express();

server.use('/public', express.static('./public'));
server.use((req, res) => {
  console.log(req.url)
  const context = {};
  const body = ReactDOMServer.renderToString(
    React.createElement(
      StaticRouter,
      { location: req.url, context },
      React.createElement(App)
    )
  );
  if (context.url) {
    res.redirect(context.url);
  }
  res.write(template({ body }));
  res.end();
});

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
