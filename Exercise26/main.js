
// Exercise 26: Blocking Delay

function blockingDelay() {
    const start = Date.now();
    while (Date.now() - start < 2000) {
    
    }
    return "Done (blocking)";
  }

    console.log(blockingDelay());