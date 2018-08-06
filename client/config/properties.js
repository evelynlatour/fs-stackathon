const filterTypes = {
  short: `short`,
  long: `long`,
  pants: `pants`,
  leggings: `leggings`,
  Midi: `Midi`,
  Maxi: `Maxi`,
  knee: `Knee Length`,
  jeanSkirt: `Jean Skirt`,
  capris: `capris`,
  shorts: `shorts`,
  tank: `Tank Top`,
  sleepwear: `sleepwear`,
  tshirt: `T-Shirt`,
  blouse: `Blouse`,
  kimono: `Kimonos`,
  romper: `Romper`,
  halter: `halter`,
  tunic: `tunic`,
  cardigan: `cardigan`,
  sweater: `sweater`,
};

const {
  short, long, pants, leggings, Midi, Maxi, knee, jeanSkirt, capris, shorts,
  tank, sleepwear, tshirt, blouse, kimono, romper, halter, tunic, cardigan, sweater,
} = filterTypes;

export const filtersByType = {
  [short]: [knee, jeanSkirt],
  [long]: [Midi, Maxi],
  [pants]: [pants, capris],
  [leggings]: [leggings],
  [shorts]: [shorts],
  [tank]: [tank, sleepwear, halter, romper],
  [tshirt]: [tshirt],
  [blouse]: [blouse, kimono],
  [sweater]: [sweater, cardigan, tunic],
};

export const bottomFilterData = [
  { name: pants, displayText: `Pants` },
  { name: leggings, displayText: `Leggings` },
  { name: short, displayText: `Short Skirts` },
  { name: long, displayText: `Long Skirts` },
  { name: shorts, displayText: `Shorts` },
];


export const topFilterData = [
  { name: tank, displayText: `Tank Tops` },
  { name: tshirt, displayText: `T-Shirts` },
  { name: blouse, displayText: `Blouses` },
  { name: sweater, displayText: `Sweaters` },
];
