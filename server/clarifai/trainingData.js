const trainingData = [
  {
    url: `http://lp2.hm.com/hmgoepprod?set=source[/8c/c0/8cc065cdb10fa328f9449b60bf0137f03e3d6889.jpg],origin[dam],category[ladies_tops_vests],type[DESCRIPTIVESTILLLIFE],res[y],hmver[1]&call=url[file:/product/main]`,
    concepts: [
      { id: `top`, value: true },
    // { id: `patterned`, value: true }, //can add others...
    ],
  }, {
    url: `http://lp2.hm.com/hmgoepprod?set=source[/e7/96/e796bfc376f44e9952fb6c0b64ff94b6d0031b5d.jpg],origin[dam],category[ladies_tops_longsleeve],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/main]`,
    concepts: [
      { id: `top`, value: true },
    ],
  }, {
    url: `http://lp2.hm.com/hmgoepprod?set=source[/cc/da/ccda38e8aa0c222a899a69ea7965548b7fc73778.jpg],origin[dam],category[ladies_tops_longsleeve],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/main]`,
    concepts: [
      { id: `top`, value: true },
    ],
  }, {
    url: `http://lp2.hm.com/hmgoepprod?set=source[/0c/72/0c72afe262f130d0f3f3b167479971ba4cafe0e9.jpg],origin[dam],category[ladies_tops_longsleeve],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/main]`,
    concepts: [
      { id: `top`, value: true },
    ],
  }, {
    url: `http://lp2.hm.com/hmgoepprod?set=source[/f5/eb/f5eb07e2f239613182669037a2b5fed5b697c004.jpg],origin[dam],category[ladies_tops_longsleeve],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/main]`,
    concepts: [
      { id: `top`, value: true },
    ],
  }, {
    url: `http://lp2.hm.com/hmgoepprod?set=source[/ad/99/ad99c0ac8177767a94239d493e202a41b9aa12e5.jpg],origin[dam],category[ladies_basics_tops_shortsleeve],type[DESCRIPTIVESTILLLIFE],res[y],hmver[1]&call=url[file:/product/main]`,
    concepts: [
      { id: `top`, value: true },
    ],
  }, {
    url: `http://lp2.hm.com/hmgoepprod?set=source[/9a/53/9a53cfca6197af1e6db9eefb6dd7326f16226c8f.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/main]`,
    concepts: [
      { id: `top`, value: true },
    ],
  }, {
    url: `http://lp2.hm.com/hmgoepprod?set=source[/e7/b5/e7b5b047cde75fc7a8f44d119773e42dd2f25cad.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/main]`,
    concepts: [
      { id: `top`, value: true },
    ],
  }, {
    url: `http://lp2.hm.com/hmgoepprod?set=source[/74/1a/741a5676dfb8339c18c2c9f18548ea9a616cec7a.jpg],origin[dam],category[ladies_tops_longsleeve],type[DESCRIPTIVESTILLLIFE],res[y],hmver[1]&call=url[file:/product/main]`,
    concepts: [
      { id: `top`, value: true },
    ],
  }, {
    url: `http://lp2.hm.com/hmgoepprod?set=source[/b6/dc/b6dcf118039384cc822a986bdf18ed87f62d7bbb.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[1]&call=url[file:/product/main]`,
    concepts: [
      { id: `top`, value: true },
    ],
  }, {
    url: `http://lp2.hm.com/hmgoepprod?set=source[/aa/36/aa3619c0f76bb3cf9b4b273dda440ccebf335f00.jpg],origin[dam],category[ladies_tops_vests],type[DESCRIPTIVESTILLLIFE],res[y],hmver[1]&call=url[file:/product/main]`,
    concepts: [
      { id: `top`, value: true },
    ],
  }, {
    url: `http://lp2.hm.com/hmgoepprod?set=source[/4d/37/4d37ae314593cbd3ba07314b7bdd6960678e31be.jpg],origin[dam],category[ladies_tops_vests],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/main]`,
    concepts: [
      { id: `top`, value: true },
    ],
  },

  // {
  //   url: `http://lp2.hm.com/hmgoepprod?set=source[/44/77/44774725cf8d586de7e21b0dd7a43d48c86a9e6f.jpg],origin[dam],category[ladies_jeans_loose],type[DESCRIPTIVESTILLLIFE],res[y],hmver[1]&call=url[file:/product/main]`,
  //   concepts: [
  //     { id: `bottom`, value: true },
  //   ],
  // }, {
  //   url: `http://lp2.hm.com/hmprod?set=source[/model/2016/E00%200494691%20006%2000%205500.jpg],type[STILLLIFE_FRONT],res[m]&hmver=0&call=url[file:/product/main]`,
  //   concepts: [
  //     { id: `bottom`, value: true },
  //   ],
  // }, {
  //   url: `http://lp2.hm.com/hmgoepprod?set=source[/11/c6/11c6934e026b270a9edd3554994225e4a58e0d77.jpg],origin[dam],category[ladies_trousers_joggers],type[DESCRIPTIVESTILLLIFE],res[y],hmver[1]&call=url[file:/product/main]`,
  //   concepts: [
  //     { id: `bottom`, value: true },
  //   ],
  // }, {
  //   url: `http://lp2.hm.com/hmgoepprod?set=source[/ed/c3/edc34af1a2a4aae488bec5c2acab575db1428a14.jpg],origin[dam],category[ladies_trousers_flare],type[DESCRIPTIVESTILLLIFE],res[y],hmver[1]&call=url[file:/product/main]`,
  //   concepts: [
  //     { id: `bottom`, value: true },
  //   ],
  // }, {
  //   url: `http://lp2.hm.com/hmgoepprod?set=source[/10/61/10610fc323c98edff9beecbeac39c3b4d4b18027.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/main]`,
  //   concepts: [
  //     { id: `bottom`, value: true },
  //   ],
  // }, {
  //   url: `http://lp2.hm.com/hmgoepprod?set=source[/b8/30/b830ed9d48b88e8b41d8ccd05bfcdd06b1de3aca.jpg],origin[dam],category[ladies_trousers_loose],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]`,
  //   concepts: [
  //     { id: `bottom`, value: true },
  //   ],
  // }, {
  //   url: `http://lp2.hm.com/hmgoepprod?set=source[/56/2e/562e80782fcec434b425baccf4512e2ddd264ddf.jpg],origin[dam],category[ladies_skirts_shortskirts],type[DESCRIPTIVESTILLLIFE],res[y],hmver[1]&call=url[file:/product/main]`,
  //   concepts: [
  //     { id: `bottom`, value: true },
  //   ],
  // }, {
  //   url: `http://lp2.hm.com/hmgoepprod?set=source[/49/1c/491ce527a5a0fe13b2d76618516816aa24091fac.jpg],origin[dam],category[ladies_skirts_shortskirts],type[DESCRIPTIVESTILLLIFE],res[y],hmver[1]&call=url[file:/product/main]`,
  //   concepts: [
  //     { id: `bottom`, value: true },
  //   ],
  // }, {
  //   url: `http://lp2.hm.com/hmgoepprod?set=source[/22/2b/222b333c5106dc2d5255ef1b1dd9f0b7ca6e4749.jpg],origin[dam],category[ladies_skirts_longskirts],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]`,
  //   concepts: [
  //     { id: `bottom`, value: true },
  //   ],
  // }, {
  //   url: `http://lp2.hm.com/hmgoepprod?set=source[/23/23/232361ac0540818c9fff5dc178c95719639fb800.jpg],origin[dam],category[ladies_skirts_shortskirts],type[DESCRIPTIVESTILLLIFE],res[y],hmver[1]&call=url[file:/product/main]`,
  //   concepts: [
  //     { id: `bottom`, value: true },
  //   ],
  // }, {
  //   url: `http://lp2.hm.com/hmgoepprod?set=source[/99/b5/99b5d51ba171ecf76b28c11c354217c07581bc80.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[1]&call=url[file:/product/main]`,
  //   concepts: [
  //     { id: `bottom`, value: true },
  //   ],
  // },

];

module.exports = trainingData;
