// Collect class and user information using prompt()
const subjectTitle = prompt("Enter the subject title:");
const classSchedule = prompt("Enter the class schedule (Time, Days):");
const classroom = prompt("Enter the classroom:");
const classInstructor = prompt("Enter the class instructor's name:");
const studentName = prompt("Enter your name:");

// Log the information to the console in the required format
console.log(`${studentName} is currently enrolled in ${subjectTitle} with a class schedule of ${classSchedule} at room ${classroom}. The instructor for the subject is ${classInstructor}.`);
