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
  for (let i = 1; i <= num; i++) {
    let ary = lines[i].split(" ");
    arr.push([Number(ary[0]), Number(ary[1]), Number(ary[2])]);
  }
  arr.sort((a, b) => {
    return b[2] - a[2];
  });
  arr.sort((a, b) => {
    return b[1] - a[1];
  });
  arr.sort((a, b) => {
    return b[0] - a[0];
  });
  for (let i = 0; i < num; i++) {
    let ans = arr[i].join(" ");
    console.log(ans);
  }
});
