// iv. Object manipulation
let student = {
  name: "Aarav",
  age: 20,
  grade: "B"
};

// Add a new property
student.class = "B.Tech CSE";

// Update grade
student.grade = "A";

// Display all information
console.log("Student Information:");
for (let key in student) {
  console.log(`${key}: ${student[key]}`);
}
