const fs = require("fs").promises;

async function readFile(filePath) {
  try {
    const input = await fs.readFile(filePath, "utf-8");

    const getScoreForEachRound = (input) => {
      const arr = input.split(/\n/);
      return arr.map((item) => {
        let score = 0;
        switch (item) {
          //lose
          case "B X":
            score = 1;
            break;
          case "C Y":
            score = 2;
            break;
          case "A Z":
            score = 3;
            break;
          //draw
          case "A X":
            score = 4;
            break;
          case "B Y":
            score = 5;
            break;
          case "C Z":
            score = 6;
            break;
          //win
          case "C X":
            score = 7;
            break;
          case "A Y":
            score = 8;
            break;
          case "B Z":
            score = 9;
            break;
          default:
            break;
        }
        return score;
      });
    };

    const getScoreForTournament = (scores) => {
      return scores.reduce((total, score) => total + score, 0);
    };

    console.log(getScoreForTournament(getScoreForEachRound(input)));
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
}

readFile("input.txt");

//  Score values
//  B X - 0 - lose (rock loses to paper) + 1
//  C Y - 0 - lose (paper loses to scissors) + 2
//  A Z - 0 - lose (scissors loses to rock) + 3
//  A X - 3 - draw + 1
//  B Y - 3 - draw + 2
//  C Z - 3 - draw + 3
//  C X - 6 - win (rock beats scissors) + 1
//  A Y - 6 - win (paper beats rock) + 2
//  B Z - 6 - win (scissors beats paper) + 3
