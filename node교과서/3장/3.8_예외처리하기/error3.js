const fs = require("fs").promises;

setInterval(() => {
  fs.unlink("./abcdefg.js");
}, 1000);

// 프로미스의 에러는 알아서 처리되었으나 노드 버전이 올라가면서 프로세스가 종료됨
