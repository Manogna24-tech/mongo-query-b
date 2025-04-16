db.employees.updateOne(
    {email:"amy@gmail.com"},
    {$set:{department:"Admin"}}//set = operator in MONGODB
);

db.employees.find()

db.employees.find(
    {department:"HR",location:"FL"},
    {_id:0,name:1,email:1}
);//displays the employee in HR department and location Ohio(OH) ( displays only name and email )

db.employees.updateOne(
    {email:"jason@gmail.com"},
    {$set:{email:"jason@email.com"}}
);