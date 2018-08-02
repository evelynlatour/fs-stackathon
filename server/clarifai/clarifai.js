const Clarifai = require(`clarifai`);
const fs = require(`fs`);

const app = new Clarifai.App({
  apiKey: `9094eff3dbdf4e8eb990ba4ab678a98a`,
});

app.models.predict(`e0be3b9d6a454f0493ac3a30784001ff`, `https://samples.clarifai.com/apparel.jpeg`).then(
  (response) => {
    const data = JSON.stringify(response.outputs); // response.outputs currently an array, may need to make object? depends on how its being saved
    fs.writeFileSync(`./data.json`, data, `utf-8`);
    console.log(data); // do something with the response in this unnamed function
  },
  (err) => {
    console.error(err);
  },
);


// app.models.predict = async (`e0be3b9d6a454f0493ac3a30784001ff`, `https://samples.clarifai.com/apparel.jpeg`) => {
//   await response
// }
