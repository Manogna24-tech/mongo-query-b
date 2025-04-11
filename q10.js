db.employees.count()
db.employees.find().skip(1)//skips 1st document and shows second document onwards 
db.employees.find().sort({name:1})//sorts based on the name field
db.employees.find().sort({name:-1})//descending order
db.employees.find().limit(2)//first 2 documents