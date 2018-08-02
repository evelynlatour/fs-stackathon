const express = require(`express`);
const path = require(`path`);
const webpack = require(`webpack`);
const webpackDevMiddleware = require(`webpack-dev-middleware`);

const app = express();
const config = require(`../webpack.config.js`);

const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));

app.get(`*`, (req, res) => {
  res.sendFile(path.join(__dirname, `../public/index.html`));
});

// app.get(`/`, (req, res) => {
//   res.send(`Connected through node server`);
// });

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
