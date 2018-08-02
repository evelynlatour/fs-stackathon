const router = require(`express`).Router();
const { Image } = require(`../db`);

router.get(`/`, async (req, res, next) => {
  try {
    const images = await Image.findAll();
    res.json(images);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
