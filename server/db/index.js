const chalk = require(`chalk`);
const Sequelize = require(`sequelize`);

console.log(chalk.magenta(`Opening database connection`));

const db = new Sequelize(`postgres://localhost:5432/stackathon`, { logging: false });

const Image = db.define(`image`, {
  imageUrl: {
    type: Sequelize.TEXT,
  },
});

async function sync() {
  await db.sync(); // { force: true }
  console.log(chalk.green(`db synced!`));
}
sync();

module.exports = { Image, db };
