

// Exercise 28: Promise with Delay

function delayPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Success: Promise resolved after 2 seconds");
     
    }, 2000);
  });
}

async function useDelayPromise() {
  try {
    const message = await delayPromise();
    console.log(message);
  } catch (error) {
    console.error(error);
  }
}

useDelayPromise();
