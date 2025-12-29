// exercise31/main.js
function fetchUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log("Users list:", data);
    })
    .catch(error => {
      console.error("Error fetching users:", error);
    });
}

// Call the function
fetchUsers();