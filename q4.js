db.employees.insertOne({
    name:"John Smith",
    email:"john@gmail.com",
    department:"IT",
    salary:1456,
    location:["FL","OH"],
    date:Date()
});
//show collections automatically shows employees
db.employees.find()