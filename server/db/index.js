const chalk = require(`chalk`);
const Sequelize = require(`sequelize`);

console.log(chalk.magenta(`Opening database connection...`));

const db = new Sequelize(`postgres://localhost:5432/stackathon`, { logging: false });

const Image = db.define(`image`, {
  nickname: {
    type: Sequelize.TEXT,
  },
  imageUrl: {
    type: Sequelize.TEXT,
  },
  concept1: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
  },
  concept2: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
  },
  concept3: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
  },
});

async function sync() {
  await db.sync(); // { force: true } // might make sense to get/make a seed file
  console.log(chalk.magenta(`db synced!`));
  db.close();
}
sync();

module.exports = { Image, db };
