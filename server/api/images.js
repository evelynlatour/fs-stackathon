const router = require(`express`).Router();
const { Image } = require(`../db`);
const chalk = require(`chalk`);


// api/images
router.get(`/`, async (req, res, next) => {
  try {
    const images = await Image.findAll();
    res.json(images);
  } catch (err) {
    res.status(500).send(err);
  }
});

// api/images
router.post(`/`, async (req, res, next) => {
  try {
    const images = await Image.create({
      nickname: req.body.nickname,
      imageUrl: req.body.imageUrl,
    });
    console.log(chalk.green(`New image added to the database`));
    res.status(201).json(images);
  } catch (err) {
    res.status(500).send(err);
  }
});

// api/images
router.put(`/:imageId`, async (req, res, next) => {
  try {
    const images = await Image.update({
      where: { imageUrl: req.body.imageUrl },
      returning: true,
      plain: true,
    }, {
      nickname: req.body.nickname,
    });
    console.log(chalk.green(`Image in database has been updated`));
    res.status(201).json(images);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
