const Clarifai = require(`clarifai`);
const fs = require(`fs`);

const app = new Clarifai.App({
  apiKey: `9094eff3dbdf4e8eb990ba4ab678a98a`,
});


const apparelPredict = async (image) => {
  const response = await app.models.predict(`e0be3b9d6a454f0493ac3a30784001ff`, image); // { response } ??
  console.log(JSON.stringify(response.outputs));
  await fs.writeFileSync(`../../data.json`, JSON.stringify(response), `utf8`);
  const data = response.outputs[0].data.concepts;
  return data;
};

// apparelPredict(`https://samples.clarifai.com/apparel.jpeg`);

module.exports = { app, apparelPredict };
