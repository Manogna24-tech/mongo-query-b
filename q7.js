db.employees.insertMany([
    {
        name:"Test2",
        email:"test2@gmail.com",
        nationality:"ABC",
    },
    {
        name:"Test3",
        email:"test3@gmail.com",
        nationality:"ABC",
    },
]);
db.employees.find({nationality:"ABC"})//finds only those documents where nationality is ABC
db.employees.findOne({nationality:"ABC"})//only 1st document
db.employees.deleteMany({nationality:"ABC"});