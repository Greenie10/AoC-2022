import fs from "fs/promises";

async function readFile(filePath) {
  try {
    const input = await fs.readFile(filePath, "utf-8");
    const arr = input.split(/\n/);

    let totalScore = 0;

    let recordOfResults = {};
    arr.forEach((item) => {
      if (typeof recordOfResults[item] == "undefined") {
        recordOfResults[item] = 1;
      } else {
        recordOfResults[item]++;
      }
    });

    let scoresLookup = {
      "B X": 1,
      "C Y": 2,
      "A Z": 3,
      "A X": 4,
      "B Y": 5,
      "C Z": 6,
      "C X": 7,
      "A Y": 8,
      "B Z": 9,
    };
    // A: "rock 1",
    // B: "paper 2",
    // C: "scissors 3",

    // X: "lose 0",
    // Y: "draw 3",
    // Z: "win 6",

    let scoresLookupPart2 = {
      "A X": 3,
      "B X": 1,
      "C X": 2,
      "A Y": 4,
      "B Y": 5,
      "C Y": 6,
      "A Z": 8,
      "B Z": 9,
      "C Z": 7,
    };

    Object.keys(recordOfResults).forEach((key) => {
      totalScore += recordOfResults[key] * scoresLookupPart2[key];
    });

    console.log(totalScore);
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
}

readFile("input.txt");
