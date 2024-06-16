var fs = require("fs"); // require() 함수를 이용하여 fs 모듈을 불러온다. fs 모듈은 파일 시스템에 접근하는 모듈이다.
//ReadFileSync

// console.log("A");
// var result = fs.readFileSync("./ex/sample.txt", "utf8");
// console.log(result);
// console.log("C");

console.log("A");
var result = fs.readFile("./ex/sample.txt", "utf8");
console.log(result);
console.log("C");
