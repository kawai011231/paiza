process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
    const room=Number(lines[0].split(' ')[0])
    const hum=Number(lines[0].split(' ')[1])
    const time=Number(lines[0].split(' ')[2])
    let full=[]
    for(let i=0;i<hum;i++){
        full.push(Number(lines[i+1]))
    }
    for(let i=hum+1;i<time+hum+1;i++){
        let a=Number(lines[i].split(' ')[0])
        let b=Number(lines[i].split(' ')[1])
        if(Number(lines[i-hum])===b){
            console.log("Yes")
        }else if(full.includes(b)){
            console.log("No")
        }else{
            console.log("Yes")
        }
    }
});