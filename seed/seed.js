const db = require(`../server/db`);

async function seed() {
  await db.sync({ force: true });

  const clothingItems = [
    {
      concept1: [`Tank Top`, `0.6096587`],
      nickname: `sleeveless blouse`,
      imageUrl: `http://lp2.hm.com/hmgoepprod%3Fset=source[/65/68/6568ebe90d0b07435a1c9a96d5e74d3e80a7b01b.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[1]&call=url[file:/product/main]`,
      concept3: [`Casual Dress`, `0.48063982`],
      concept2: [`Tunic`, `0.57976854`],
    },
    {
      concept1: [`Blazer`, `0.80686367`],
      nickname: `embroidered sweater`,
      imageUrl: `http://lp2.hm.com/hmgoepprod?set=source[/1d/c2/1dc2ba128719e45a77f43b235c9e967771687d6e.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[1]&call=url[file:/product/main]`,
      concept2: [`Sweater`, `0.6479039`],
      concept3: [`Sweatshirt`, `0.6113689`],
    },
    {
      concept1: [`Sweater`, `0.8900372`],
      nickname: `yellow sweater`,
      imageUrl: `http://lp2.hm.com/hmgoepprod?set=source[/16/5e/165eaea9e90822cf41c6de33d9f901e33e474fd1.jpg],origin[dam],category[ladies_cardigansjumpers_cardigans],type[DESCRIPTIVESTILLLIFE],res[w],hmver[1]&call=url[file:/product/main]`,
      concept3: [`Hoodies`, `0.6076345`],
      concept2: [`Sweatshirt`, `0.6289333`],
    },
    {
      concept1: [`Jeans`, `0.89919895`],
      nickname: `blue jeans`,
      imageUrl: `http://lp2.hm.com/hmgoepprod?set=source[/ed/b0/edb0393993701180ac6c1d3354ab89d8f99165fd.jpg],origin[dam],category[ladies_jeans_skinny_skinnyregular],type[DESCRIPTIVESTILLLIFE],res[l],hmver[1]&call=url[file:/product/main]`,
      concept3: [`Capris`, `0.6926931`],
      concept2: [`Skinny Pants`, `0.71890086`],
    },
    {
      concept1: [`Capris`, `0.7391012`],
      nickname: `black jeans`,
      imageUrl: `http://lp2.hm.com/hmgoepprod%3Fset=source[/52/50/5250f99b9fd580882033ea280513a2437f9f8bc9.jpg],origin[dam],category[ladies_jeans_skinny_skinnyregular],type[DESCRIPTIVESTILLLIFE],res[w],hmver[1]&call=url[file:/product/main]`,
      concept3: [`Leggings`, `0.6023814`],
      concept2: [`Skinny Pants`, `0.7227789`],
    },
    {
      concept1: [`Jeans`, `0.8426851`],
      nickname: `ripped blue jeans`,
      imageUrl: `http://lp2.hm.com/hmgoepprod?set=source[/1d/c1/1dc1b12b3000df518aaa72969da0b3eee5f84fad.jpg],origin[dam],category[ladies_jeans_skinny_skinnyhigh],type[DESCRIPTIVESTILLLIFE],res[s],hmver[1]&call=url[file:/product/style]`,
      concept3: [`Capris`, `0.7403829`],
      concept2: [`Skinny Pants`, `0.7568083`],
    },
  ];
}
seed();
