var fs = require("fs");

fs.readFile(__dirname + "/input.txt", function (err, data) {
  if (err) return console.error(err);
  console.log(data.toString());
});

console.log("Program has ended");
