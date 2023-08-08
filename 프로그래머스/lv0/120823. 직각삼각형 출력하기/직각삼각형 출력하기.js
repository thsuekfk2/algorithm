const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    
    let num = Number(input[0]);
    let star = "";
    for(let i=1; i<= num; i++){
        for(let j=1; j<=i ; j++){
            star += "*";
        }
        star += "\n"
    }
    console.log(star);
});