const fs = require("fs");

setInterval(() => {
  fs.unlink("./abcdefg.js", (err) => {
    if (err) {
      console.error(err);
    }
  });
}, 1000);

//노드 내장 모듈의 에러는 프로세스를 종료하지 않는다. 단 throw는 프로세스를 종료시킨다.
