// studentEnrollment.js

// Create two arrays for the subjects
let DSA = [];
let WebDev = [];

let subjectChoice = "";
let currentSubject = null;

while (true) {
    // Ask user to choose a subject
    subjectChoice = prompt("Select a subject:\n(A) DSA\n(B) WebDev\n(Any other key to exit)").toUpperCase();

    if (subjectChoice === "A") {
        currentSubject = DSA;
        alert("You selected: DSA");
    } else if (subjectChoice === "B") {
        currentSubject = WebDev;
        alert("You selected: WebDev");
    } else {
        break; // Exit the loop if user inputs something else
    }

    let action;
    do {
        action = prompt("Choose an action:\n(A) Enroll\n(B) Unenroll\n(C) Select Another Subject\n(D) Exit").toUpperCase();

        switch (action) {
            case "A": {
                let studentName = prompt("Enter the name of the student to ENROLL:");
                currentSubject.push(studentName);
                alert(`${studentName} enrolled successfully.`);
                break;
            }

            case "B": {
                if (currentSubject.length === 0) {
                    alert("No students currently enrolled.");
                    break;
                }

                alert("Currently Enrolled Students:\n" + currentSubject.join(", "));
                let studentToRemove = prompt("Enter the name of the student to UNENROLL:");

                // Remove by name
                const index = currentSubject.indexOf(studentToRemove);
                if (index !== -1) {
                    currentSubject.splice(index, 1);
                    alert(`${studentToRemove} has been unenrolled.`);
                } else {
                    alert(`${studentToRemove} was not found in the list.`);
                }
                break;
            }

            case "C":
                // Change subject, break back to subject selection
                break;

            case "D":
                // Exit: Show all lists and end program
                alert(
                    "Final Enrolled Students:\n" +
                    `DSA: ${DSA.join(", ") || "None"}\n` +
                    `WebDev: ${WebDev.join(", ") || "None"}`
                );
                exitProgram = true;
                break;

            default:
                alert("Invalid action. Please choose again.");
        }

    } while (action !== "C" && action !== "D");

    if (action === "D") break;
}
