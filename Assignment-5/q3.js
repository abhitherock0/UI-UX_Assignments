function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const age = parseInt(document.getElementById("age").value);

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (name === "") {
    alert("Name cannot be empty.");
  } else if (!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
  } else if (isNaN(age) || age < 18 || age > 100) {
    alert("Age must be between 18 and 100.");
  } else {
    alert("Form submitted successfully!");
  }
}
