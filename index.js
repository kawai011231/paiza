process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", (line) => {
  lines.push(line);
});
reader.on("close", () => {
  const num = Number(lines[0]);
  let arr = [];
  for (let i = 0; i < num; i++) {
    let ary = lines[i + 1].split(" ");
    arr.push([ary[0], Number(ary[1])]);
  }
  const f = function (a, b) {
    return a[1] - b[1];
  };
  arr.sort((a, b) => {
    return a[1] < b[1] ? -1 : 1;
  });
  arr.forEach((element) => {
    console.log(element[0]);
  });
});
