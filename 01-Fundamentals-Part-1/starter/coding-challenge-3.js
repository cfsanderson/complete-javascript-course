const dataOne = {
  Dolphins: {
    score1: 96,
    score2: 108,
    score3: 89,
  },
  Koalas: {
    score1: 88,
    score2: 91,
    score3: 110,
  },
};

const dataTwo = {
  Dolphins: {
    score1: 97,
    score2: 112,
    score3: 101,
  },
  Koalas: {
    score1: 109,
    score2: 95,
    score3: 123,
  },
};

const dataThree = {
  Dolphins: {
    score1: 97,
    score2: 112,
    score3: 101,
  },
  Koalas: {
    score1: 109,
    score2: 95,
    score3: 106,
  },
};

// Get the size of an object
const size = (data) => {
  let :withObject.keys(data);
}

const dataOneSize = size(dataOne.Dolphins).length;

const dataOneAvg =
  dataOne.Dolphins.score1 +
  dataOne.Dolphins.score2 +
  dataOne.Dolphins.score3 / dataOneSize;

const dolphinsScores = {
  set1: [96, 108, 89],
  set2: [97, 112, 101],
  set3: [97, 112, 101],
};

const dolphinsScoresAvg1 =
  dolphinsScores.set1 + dolphinsScores.set2 + dolphinsScores.set3 / dataOneSize;

const size = dolphinsScores.set1.map();

const sum = dolphinsScores.set1
  .map((v) => v[1])
  .reduce((sum, current) => sum + current, 0);

console.log(sum(dolphinsScores.));
