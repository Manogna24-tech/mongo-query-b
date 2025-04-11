db.employees.insertOne(
    {
        name: "Test",
        email: "test@gmail.com",
        nationality:"Indian"
    });
    db.employees.find();//all documents
    db.employees.findOne();//only one document
    db.employees.deleteOne({email:"test@gmail.com"})//for deletion
    db.employees.find()//all othet=r documents seen s=exceot test ( what has been deleted )