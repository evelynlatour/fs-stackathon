const router = require(`express`).Router();
const { Image } = require(`../db`);
const apparelWorkflow = require(`../clarifai/modelTrain`);

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
    const data = await apparelWorkflow(req.body.imageUrl);
    const typeData = data[0].data.concepts;
    const subtypeData = data[1].data.concepts;
    const colorData = data[2].data.colors;

    console.log(chalk.cyan(JSON.stringify((typeData))));
    console.log(chalk.magenta(JSON.stringify((subtypeData))));
    console.log(chalk.yellow(JSON.stringify((colorData))));

    const item = Image.build({
      nickname: req.body.nickname,
      imageUrl: req.body.imageUrl,
      type: [typeData[0].name, `${typeData[0].value}`],
      subtype1: [subtypeData[0].name, `${subtypeData[0].value}`],
      subtype2: [subtypeData[1].name, `${subtypeData[1].value}`],
      subtype3: [subtypeData[2].name, `${subtypeData[2].value}`],
    });

    colorData[0] ? item.color1 = [colorData[0].w3c.hex, colorData[0].w3c.name, `${colorData[0].value}`] : item.color1 = [];
    colorData[1] ? item.color2 = [colorData[1].w3c.hex, colorData[1].w3c.name, `${colorData[1].value}`] : item.color2 = [];
    colorData[2] ? item.color3 = [colorData[2].w3c.hex, colorData[2].w3c.name, `${colorData[2].value}`] : item.color3 = [];

    // color1: [colorData[0].w3c.hex, colorData[0].w3c.name, `${colorData[0].value}`],
    // color2: [colorData[1].w3c.hex, colorData[1].w3c.name, `${colorData[1].value}`],
    // color3: [colorData[2].w3c.hex, colorData[2].w3c.name, `${colorData[2].value}`],

    await item.save(); // didn't have an await here b4

    console.log(chalk.green(`New item added to the database!`));
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
