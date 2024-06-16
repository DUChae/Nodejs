var fs = require("fs"); // require() 함수를 이용하여 fs 모듈을 불러온다. fs 모듈은 파일 시스템에 접근하는 모듈이다.
//ReadFileSync

// console.log("A");
// var result = fs.readFileSync("./ex/sample.txt", "utf8");//readFileSync() 메서드를 이용하여 sample.txt 파일을 읽어들인다. 이때 인코딩을 utf8로 설정한다.
// console.log(result);
// console.log("C");
// //result= A B C

console.log("A");
fs.readFile("./ex/sample.txt", "utf8", function (err, result) {
  //readFile() 메서드를 이용하여 sample.txt 파일을 읽어들인다. 이때 인코딩을 utf8로 설정한다. 이때 콜백함수를 이용하여 파일을 읽어들인 후의 동작을 설정한다.
  console.log(result);
});
console.log("C");
//result= A C B
