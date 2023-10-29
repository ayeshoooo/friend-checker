// Ask the user to enter a name
const name = prompt("Please enter a name:").trim();

// Use a switch statement to check if the name is known
switch (name) {
  case "Alice":
  case "Bob":
  case "Charlie":
    console.log("You are a friend!");
    break;
  default:
    console.log("I don't know you.");
    break;
}