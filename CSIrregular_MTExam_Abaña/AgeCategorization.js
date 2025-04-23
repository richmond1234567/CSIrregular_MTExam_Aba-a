// Ask the user for their age
let age = prompt("Enter your age:");

// Convert age to a number
age = Number(age);

// Categorize the user based on their age
if (age < 5) {
    console.log("You are a Toddler.");
} else if (age >= 5 && age <= 12) {
    console.log("You are a Child.");
} else if (age >= 13 && age <= 19) {
    console.log("You are a Teenager.");
} else if (age >= 20 && age <= 35) {
    console.log("You are a Young Adult.");
} else if (age >= 36 && age <= 60) {
    console.log("You are Middle-Aged.");
} else if (age > 60) {
    console.log("You are a Senior.");
} else {
    console.log("Invalid age entered.");
}
