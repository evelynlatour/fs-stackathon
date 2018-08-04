const Sequelize = require(`sequelize`);
const db = require(`./database`);


const Image = db.define(`image`, {
  nickname: {
    type: Sequelize.TEXT,
  },
  imageUrl: {
    type: Sequelize.TEXT,
  },
  type: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
  },
  subtype1: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
  },
  subtype2: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
  },
  subtype3: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
  },
  color1: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
  },
  color2: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
  },
  color3: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
  },
});

module.exports = Image;
