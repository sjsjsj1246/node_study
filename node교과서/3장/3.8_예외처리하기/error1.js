setInterval(() => {
  console.log("시작");
  try {
    throw new Error("서버를 고장내주마!");
  } catch (e) {
    console.error(e);
  }
}, 1000);

//에러가 발생할 것 같은 부분은 try/catch문으로 감싸자
