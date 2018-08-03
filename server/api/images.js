const router = require(`express`).Router();
const { Image } = require(`../db`);
const { app, apparelPredict } = require(`../clarifai/clarifai`);

const chalk = require(`chalk`);


// api/images
router.get(`/`, async (req, res, next) => {
  try {
    const images = await Image.findAll();
    res.json(images);
  } catch (err) {
    console.log(chalk.red(err));
    res.status(500).send(err);
  }
});

router.post(`/`, async (req, res, next) => {
  try {
    const data = await apparelPredict(req.body.imageUrl);
    console.log(chalk.magenta(JSON.stringify(data)));
    const item = Image.build({
      nickname: req.body.nickname,
      imageUrl: req.body.imageUrl,
      concept1: [data[0].name, `${data[0].value}`],
      concept2: [data[1].name, `${data[1].value}`],
      concept3: [data[2].name, `${data[2].value}`],
    });

    item.save();

    console.log(chalk.green(`New item added to the database`));
    res.status(201).json(item);
  } catch (err) {
    console.log(chalk.red(err));
    res.status(500).send(err);
  }
});


// api/images/:imageId
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
    console.log(chalk.red(err));
    res.status(500).send(err);
  }
});

module.exports = router;
