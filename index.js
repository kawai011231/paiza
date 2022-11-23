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
  const n = Number(lines[0].split(" ")[0]);
  const l = Number(lines[0].split(" ")[1]);
  const ary = lines[n + 1].split(" ");
  for (let i = 0; i < n; i++) {
    let a = lines[i + 1].split(" ");
    if (ary.toString() == a.toString()) {
      console.log(i + 1);
    }
  }
});
// 配列が同じかどうか比較するときはtoString()関数を使う
