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
  const input = lines[0].split(" ");
  const n = Number(input[0]);
  const m = Number(input[1]);
  const l = Number(input[2]);
  const pal = [];
  const tim = [];
  for (let i = 1; i <= m; i++) {
    let a = lines[i].split(" ");
    let b = [];
    for (let j = 0; j < a.length; j++) {
      b.push(Number(a[j]));
    }
    pal.push(b);
  }
  for (let i = n + 1; i <= l + 3; i++) {
    let a = lines[i].split(" ");
    let b = [];
    for (let j = 0; j < a.length; j++) {
      b.push(Number(a[j]));
    }
    tim.push(b);
  }
  for (let i = 0; i < l - 1; i++) {
    let dis = [];
    for (let j = 0; j < n; j++) {
      let x = tim[i + 1][j] - tim[i][j];
      dis.push(x);
    }
    for (let j = 0; j < m; j++) {
      if (dis.toString() === pal[j].toString()) {
        console.log(j + 1);
      }
    }
  }
});
