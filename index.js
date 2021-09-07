import { parseTime, formatTime, getMonthStartAndEnd, clearCountFloat } from "./lib";
const time = new Date().getTime() - 2 * 60 * 1000;

console.log(parseTime(1627816169200));
console.log(formatTime(time));
console.log(getMonthStartAndEnd());
console.log(clearCountFloat(0.1234))
console.log(clearCountFloat(0.129))
console.log(clearCountFloat(0.9))
console.log(clearCountFloat(100))
console.log(clearCountFloat(100.010))

