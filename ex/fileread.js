const fs = require("fs");
fs.readFile("ex/sample.txt", "utf8", (err, data) => {
  console.log(data);
});
