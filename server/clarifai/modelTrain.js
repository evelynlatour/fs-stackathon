/* eslint no-restricted-syntax: [0] */
/* eslint no-await-in-loop: [0] */
/* eslint func-names: [0] */
/* eslint no-loop-func: [0] */

const Clarifai = require(`clarifai`);
const fs = require(`fs`);
const chalk = require(`chalk`);
const trainingData = require(`./trainingData`);

const app = new Clarifai.App({
  apiKey: `eb9c04333b34436b85b4ed36e1aae74c`,
});

/* Step 1: Add images with concepts */
const newModelInit = () => {
  for (let i = 0; i < trainingData.length; i++) {
    (function (index) {
      setTimeout(() => {
        app.inputs.create(trainingData[i]);
        console.log(trainingData[i]);
      }, 1000 + (5000 * index));
    }(i));
  }
  console.log(`finished`);
};
// newModelInit();

/* Step 2: Create a model, take note of the model ID & model_version ID
that is returned here. This should/can only be run once! */
// const newModelCreate = async () => {
//   const newModelInfo = await app.models.create(`apparelCategories`,
//     [
//       { id: `top` },
//     ]);
//   console.log(newModelInfo);
//   return newModelInfo;
// };
// newModelCreate();
/* modelId = 'apparelCategories'
model_version_id = '835acab7b2514e9e993446e6a85e745e' */

/* Step 3: Train the model */
// const newModelTrain = async (image) => {
//   const trainingResponse = await app.models.train(`model id returned from above`);
//   return trainingResponse;
// };
// newModelTrain()

/* Step 4: Predict with your model */
// const useNewModel = async (image) => {
//   const response = await app.models.predict({ id: `apparelCategories`, version: `0748421b850d41768c04812aa5cce94d` }, image);
//   console.log(chalk.cyan(JSON.stringify(response)));
//   return response;
// };

// useNewModel(`http://lp2.hm.com/hmgoepprod?set=source[/c4/f6/c4f637df48bb7994317b5fe9221cb4c394404e2a.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/main]`);

/* Step 5: Predict with your model + other models in the workflow */
const apparelWorkflow = async (image) => {
  try {
    const response = await app.workflow.predict(`top-bottom`, image);
    console.log(response);
    const allData = response.results[0].outputs;
    // const typeData = response.results[0].outputs[0].data.concepts;
    // const subtypeData = response.results[0].outputs[1].data.concepts;
    // const colorData = response.results[0].outputs[2].data.colors;
    console.log(chalk.green(`apparelWorkflow executed & received image data from Clarafai`));
    return allData;
  } catch (err) {
    console.error(chalk.red(`apparelWorkflow executed but there was an issue getting data from Clarifai`));
  }
};

// apparelWorkflow(`https://images.footlocker.com/is/image/EBFL2/CY2341_a1_sc7?hei=500&wid=500`);

module.exports = apparelWorkflow;
