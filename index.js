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
  const n = Number(lines[0]);
  const a = [];
  for (let i = 1; i <= n; i++) {
    let b = lines[i].split(" ");
    for (let j = 0; j < 3; j++) {
      b[j] = Number(b[j]);
    }
    time1 = b[0];
    time2 = b[1];
    time3 = 24 - b[2];
    time = time1 + time2 + time3;
    a.push(time);
  }
  a.sort((x, y) => x - y);
  console.log(a[0]);
  console.log(a[n - 1]);
});
