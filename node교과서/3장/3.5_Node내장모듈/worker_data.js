const {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} = require("worker_threads");

if (isMainThread) {
  const thread = new Set();
  thread.add(
    new Worker(__filename, {
      workerData: { start: 1 },
    })
  );
  thread.add(
    new Worker(__filename, {
      workerData: { start: 2 },
    })
  );
  for (let worker of thread) {
    worker.on("message", (message) => console.log("from worker", message));
    worker.on("exit", () => {
      thread.delete(worker);
      if (thread.size === 0) {
        console.log("job done");
      }
    });
  }
} else {
  const data = workerData;
  parentPort.postMessage(data.start + 100);
}
