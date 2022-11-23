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
  const x = Number(lines[0]);
  const ary = [];
  let ans = 0;
  let boo = true;
  let count = 0;
  for (let i = 0; i < x; i++) {
    ary.push(lines[i + 1]);
  }
  for (let i = 0; i < x; i++) {
    let menu = ary[i];
    if (menu === "melon" && boo) {
      boo = false;
      count = 0;
      ans = ans + 1;
      //   console.log(count)
    } else if (menu === "melon" && boo === false) {
      count = count + 1;
      if (count === 11) {
        count = 0;
        boo = true;
      }
      //   console.log(count)
    } else if (menu !== "melon" && boo === true) {
      //   console.log(count)
    } else if (menu !== "melon" && boo === false) {
      count = count + 1;
      if (count === 11) {
        count = 0;
        boo = true;
      }
      //   console.log(count)
    }
  }
  console.log(ans);
});
