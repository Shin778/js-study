let array = [5, 1, 22, 25, 6, -1, 8, 10];
let sequence = [1, 6, -1, 10];

function validateSubsequence(seq, arr) {
  let seqIndex = 0;

  //   проходимся циклом ищем количество совпадений, если совпадение есть, увеличиваем seqIndex на 1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === seq[seqIndex]) {
      seqIndex++;
    }
  }

  //   если число совпадений равно длине второго массива, то второй массив является подпоследовательностью первого и последовательность найлена
  if (seqIndex === seq.length) {
    return true;
  }

  return false;
}

console.log(validateSubsequence(sequence, array));

let integers = [-4, -2, 0, 1, 3];

function sortSquareArray(int) {
  let left = 0;
  let right = int.length - 1;
  let result = [];

  while (left <= right) {
    if (Math.pow(int[left], 2) > Math.pow(int[right], 2)) {
      result.unshift(Math.pow(int[left], 2));
      left++;
    } else if (Math.pow(int[left], 2) < Math.pow(int[right], 2)) {
      result.unshift(Math.pow(int[right], 2));
      right--;
    } else {
      result.unshift(Math.pow(int[left], 2));
      left++;
    }
  }

  return result;
}

console.log(sortSquareArray(integers));

let competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
];

let results = [0, 0, 1];

function findWinner(comp, res) {
  let hashMap = new Map();
  let competition = { winner: "", leader: "", points: 0 };

  for (let i = 0; i < comp.length; i++) {
    let homeTeam = comp[i][0];
    let awayTeam = comp[i][1];

    if (res[i] === 0) {
      competition.leader = awayTeam;
      hashMap.set(competition.leader, (hashMap.get(competition.leader) || 0) + 3);
    } else {
      competition.leader = homeTeam;
      hashMap.set(competition.leader, (hashMap.get(competition.leader) || 0) + 3);
    }

    let newPoints = hashMap.get(competition.leader);

    if (newPoints > competition.points) {
      competition.points = newPoints;
      competition.winner = competition.leader;
    }
  }
  
  return winner;
}

console.log(findWinner(competitions, results));
