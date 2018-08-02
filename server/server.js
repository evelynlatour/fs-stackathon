const express = require(`express`);
const path = require(`path`);
const volleyball = require(`volleyball`);
const bodyParser = require(`body-parser`);
const webpack = require(`webpack`);
const webpackDevMiddleware = require(`webpack-dev-middleware`);
const db = require(`./db`);
const chalk = require(`chalk`);


const app = express();
const config = require(`../webpack.config.js`);

const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));

// logging middleware
app.use(volleyball);

// body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(`/api`, require(`./api`));

app.get(`*`, (req, res) => {
  res.sendFile(path.join(__dirname, `../public/index.html`));
});

app.listen(3000, () => {
  console.log(chalk.blue(`~ ~ ~ Listening on port 3000 ~ ~ ~`));
});


// const startApp = async () => {
//   try {
//     await db.sync({ force: true });
//     console.log(chalk.green(`db synced!`));
//     app.listen(3000, () => {
//       console.log(`Server listening on port ${3000}`);
//     });
//   } catch (err) {
//     console.error(err);
//   }
// };
//
// startApp();
