db.employees.find({},{_id:0,name:1})//only names in the employee database will appear
db.employees.find({},{_id:1,name:1})//both id and names will appear
db.employees.find({},{_id:0,name:1,email:1})//for id not to appear by default only name and email appear
db.employees.find({},{name:1,email:1})//displays id by default along with name and email
db.employees.find({},{_id:0,name:1,department:1})//{}-empty
db.employees.find(
    {email:"amy@gmail.com"},
    {_id:0,name:1,email:1,department:1}
);//displays only the specified email and department of the employee(Amy Sam)
db.employees.find(
    {email:"amy@gmail.com"},
    {_id:false,name:true,email:true,department:true}
);


db.employees.find({"address.city":"Jacksonville"})//to display the employee whose city is jacksonville

db.employees.find({location:"TX"})//display employees whose location is Texas(TX)

db.employees.find({},{name:1,dept:"$department"})//full name is department in database , but we are displaying a different name

