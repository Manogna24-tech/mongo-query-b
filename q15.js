db.employees.updateOne(
    {email:"amy@gmail.com"},
    {$set:{department:"Admin"}}//set = operator in MONGODB
);

db.employees.find()