const fs = require("fs");

fs.watch("./target.txt", (eventTpye, filename) => {
  console.log(eventTpye, filename);
});
