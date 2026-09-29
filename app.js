// Hospital Management System

let patients = [];

// Function to add patient
function addPatient() {
    let id = prompt("Enter Patient ID:");
    let name = prompt("Enter Patient Name:");
    let age = prompt("Enter Patient Age:");
    let disease = prompt("Enter Disease:");

    let patient = {
        id: id,
        name: name,
        age: age,
        disease: disease
    };

    patients.push(patient);

    alert("Patient added successfully!");
}

// Function to display patients
function displayPatients() {
    if (patients.length === 0) {
        alert("No patient records found.");
        return;
    }

    let output = "Patient Records:\n\n";

    patients.forEach(function(p) {
        output += "ID: " + p.id +
                  "\nName: " + p.name +
                  "\nAge: " + p.age +
                  "\nDisease: " + p.disease +
                  "\n\n";
    });

    alert(output);
}

// Main menu
while (true) {
    let choice = prompt(
        "HOSPITAL MANAGEMENT SYSTEM\n" +
        "1. Add Patient\n" +
        "2. Display Patients\n" +
        "3. Exit\n" +
        "Enter your choice:"
    );

    if (choice === "1") {
        addPatient();
    } 
    else if (choice === "2") {
        displayPatients();
    } 
    else if (choice === "3" || choice === null) {
        alert("Thank you!");
        break;
    } 
    else {
        alert("Invalid choice!");
    }
}