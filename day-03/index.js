import fs from "fs";

let prioritiesSum = 0;
const input = fs.readFileSync("input.txt", "utf8");
const rucksacks = input.split(/\n/);

const getPriorityValue = (contents) => {
  const breakPoint = contents.length / 2;
  const front = contents.slice(0, breakPoint).split("");
  const back = contents.slice(breakPoint);
  const matches = front.filter((item) => back.includes(item));
  const itemType = matches[0];
  const priorityList = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const priorityValue = priorityList.indexOf(itemType) + 1;
  return priorityValue;
};

rucksacks.forEach((rucksack) => {
  prioritiesSum += getPriorityValue(rucksack);
});

console.log(prioritiesSum);
