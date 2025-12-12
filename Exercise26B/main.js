
// Exercise 26B: Non-blocking Delay
function nonBlockingDelay() {
    setTimeout(() => {
      console.log("Done (non-blocking)");
    }, 2000);
  }

    nonBlockingDelay();
    console.log("This prints immediately!");