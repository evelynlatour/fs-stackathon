const filterTypes = {
  short: `short`,
  long: `long`,
  pants: `pants`,
  leggings: `leggings`,
  Midi: `Midi`,
  Maxi: `Maxi`,
};

const {
  short, long, pants, leggings, Midi, Maxi,
} = filterTypes;

export const filtersByType = {
  [short]: [Midi],
  [long]: [Midi, Maxi],
  [pants]: [pants],
  [leggings]: [leggings],
};

export const bottomFilterData = [
  { name: pants, displayText: `Pants` },
  { name: leggings, displayText: `Leggings` },
  { name: short, displayText: `Short Skirts` },
  { name: long, displayText: `Long Skirts` },
];

export const topFilterData = [
// TODO: Evelyn to fill this out
];
