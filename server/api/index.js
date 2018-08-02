const router = require(`express`).Router();

router.use(`/images`, require(`./images`));

router.use((err, req, res, next) => {
  console.log(err);
  next(err);
});

module.exports = router;
