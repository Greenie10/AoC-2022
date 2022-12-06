import fs from "fs";
const input = fs.readFileSync("input.txt", "utf8");
const rucksacks = input.split(/\n/);

let prioritiesSum = 0;
const getDedupedLetters = (input) => {
  let uniqueLetters = {};
  input.split("").forEach((letter) => {
    uniqueLetters[letter] = 1;
  });
  return Object.keys(uniqueLetters).join("");
};

for (let i = 0; i < rucksacks.length; i += 3) {
  const dedupedInput = rucksacks
    .slice(i, i + 3)
    .map((item) => getDedupedLetters(item));
  let letterQuantity = {};
  dedupedInput
    .join("")
    .split("")
    .forEach((letter) => {
      if (typeof letterQuantity[letter] == "undefined") {
        letterQuantity[letter] = 1;
      } else {
        letterQuantity[letter]++;
      }
    });
  const badge = Object.keys(letterQuantity).filter(
    (key) => letterQuantity[key] === 3
  );

  const badgeList = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const badgeValue = badgeList.indexOf(badge[0]) + 1;

  prioritiesSum += badgeValue;
}
console.log(prioritiesSum);
