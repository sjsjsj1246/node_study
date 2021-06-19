process.on("uncaughtException", (err) => {
  console.error("예기치 못한 에러", err);
});
// 최후의 보루이다. 예기치 못한 에러가 발생했는데 그대로 실행하면 다음 동작이 제대로 동작하는지 보장할 수 없다.

setInterval(() => {
  throw new Error("서버를 고장내주마!");
}, 1000);

setTimeout(() => {
  console.log("실행됩니다.");
}, 2500);
