// Exercise 27: Promise-based Delay

function delayAsync() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Success: Async function resolved after 2 seconds");
        
      }, 2000);
    });
    }

    delayPromise()
      .then(msg => console.log(msg))
      .catch(err => console.error(err));