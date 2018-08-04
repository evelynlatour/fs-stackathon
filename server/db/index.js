const db = require(`./database`);
const Image = require(`./image`);


// const Image = db.define(`image`, {
//   nickname: {
//     type: Sequelize.TEXT,
//   },
//   imageUrl: {
//     type: Sequelize.TEXT,
//   },
//   concept1: {
//     type: Sequelize.ARRAY(Sequelize.TEXT),
//   },
//   concept2: {
//     type: Sequelize.ARRAY(Sequelize.TEXT),
//   },
//   concept3: {
//     type: Sequelize.ARRAY(Sequelize.TEXT),
//   },
// });

// async function sync() {
//   await db.sync({ force: true }); // { force: true }
//   console.log(chalk.magenta(`db synced!`));
// }
// sync();

module.exports = { db, Image };
