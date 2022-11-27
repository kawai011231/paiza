"use strict";
function main(lines) {
  // lines: Array<string>
  function check(num) {
    if (num == 1) {
      return false;
    } else if (num == 2) {
      return true;
    } else {
      for (let i = 2; i < num; i++) {
        if (num % i == 0) return false;

        if (i + 1 == num) return true;
      }
    }
  }

  const ary = lines[0].split(" ");
  for (let i = 0; i < ary.length - 1; i++) {
    ary[i] = ary[i].split(":");
    ary[i][0] = Number(ary[i][0]);
  }
  const num = Number(ary[ary.length - 1]);

  ary.pop();
  ary.sort((a, b) => {
    return a[0] - b[0];
  });
  let ansAry = [];
  for (let i = 0; i < ary.length; i++) {
    if (num % ary[i][0] === 0) {
      ansAry.push(ary[i][1]);
    }
  }
  let ans = "";
  if (ansAry.length > 0) {
    ans = ansAry.join("");
  } else if (check(num)) {
    ans = "prime";
  } else {
    ans = num;
  }
  console.log(ans);
}

function runWithStdin() {
  let input = "";
  process.stdin.resume();
  process.stdin.setEncoding("utf8");

  process.stdin.on("data", (v) => {
    input += v;
  });
  process.stdin.on("end", () => {
    main(input.split("\n"));
  });
}
runWithStdin();
