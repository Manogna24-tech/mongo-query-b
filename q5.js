db.employees.insertMany([
    {
        name: "Mike Joseph",
        email: "mike@gmail.com",
        department: "IT",
        salary: 2456,
        location: ["FL", "TX"],
        date:  Date()   // Correct way to store the date
    },
    {   // Added missing comma here
        name: "Cathy G",
        email: "cathy@gmail.com",  // Added missing comma
        department: "IT",
        salary: 3456,
        location: ["AX", "TX"],
        date: Date()   // Correct way to store the date
    }
]);
db.employees.find();