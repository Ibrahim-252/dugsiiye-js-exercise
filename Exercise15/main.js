
const people = [
  { name: "Ali", age: 32, city: "Istanbul" },
  { name: "Farah", age: 76, city: "Bosaso" },
  { name: "Amina", age: 25, city: "Hargeisa" }
];

for (const person of people) {
  console.log("Name: " + person.name);
  console.log("Age: " + person.age);
  console.log("City: " + person.city);
  console.log("----");
}

