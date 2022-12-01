// In case the Elves get hungry and need extra snacks, they need to know which
// Elf to ask: they'd like to know how many Calories are being carried by the
// Elf carrying the most Calories.

const fs = require("fs").promises;

async function readFile(filePath) {
  try {
    const input = await fs.readFile(filePath, "utf-8");
    const arr = input.split(/\n/).map((str) => Number(str));
    const elfTotals = [];
    arr.reduce((acc, curr) => {
      if (curr !== 0) {
        return acc + curr;
      } else {
        elfTotals.push(acc);
        return 0;
      }
    }, 0);
    const sortedElfTotals = elfTotals.sort((a, b) => b - a);
    console.log("sortedElfTotals: ", sortedElfTotals);
    console.log(
      "topThreeElfTotals: ",
      sortedElfTotals[0] + sortedElfTotals[1] + sortedElfTotals[2]
    );
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
}

readFile("input.txt");
