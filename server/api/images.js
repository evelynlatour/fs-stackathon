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
      imageUrl: req.body.imageUrl,
    });
    console.log(chalk.green(`New image added to the database`));
    res.status(201).json(images);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
