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
  const ele = lines[0].split(" ");
  const num = Number(ele[0]);
  const uni = Number(ele[1]);
  const ary = [];
  for (let i = 1; i <= num; i++) {
    let x = lines[i];
    ary.push(Number(x));
  }
  ary.sort((a, b) => {
    return a - b;
  });
  const a = ary[num - 1] / uni;
  for (let i = 1; i <= num; i++) {
    let x = Number(lines[i]) / uni;
    let y = [];
    for (let j = 0; j < a; j++) {
      if (j < x) {
        y.push("*");
      } else {
        y.push(".");
      }
    }
    let ans = y.join("");
    console.log(i + ":" + ans);
  }
});
