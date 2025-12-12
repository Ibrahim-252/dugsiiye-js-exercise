// Exercise 29: Fetching and Parsing JSON with Delay

 
const fakeJsonData = {
  name: "Ibrahim",
  age: 22,
  role: "Developer"
}; 

function fakeFetchJSON() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        json: () => Promise.resolve(fakeJsonData)
      });
    }, 2000); 
  });
}

async function getData() {
  try {
    const response = await fakeFetchJSON(); 
    const data = await response.json();     
    console.log("Fetched JSON:", data);
  } catch (err) {
    console.error("Error:", err);
  }
}
console.log("This runs immediately while waiting...");
getData();