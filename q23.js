    db.employees.updateMany(
        {},
        {$push: {points: 5}}
);//the value of  wil be pushed. Used for arrays most often . If the array doesn't exist, it create am array. 

db.employees.updateMany(
    {},
    {$push: {points: 7}}
);

db.employees.updateMany(
    {},
    {$addToSet: {points: 9}}
);

db.employees.updateMany(
    {},
    {$push:{hobbies:"Movies"}}
);

db.employees.updateMany(
    {},
    {$addToSet:{hobbies:"Music"}}
);//unique-use addToSet to add unique values to an array. If the value already exists, it will not be added again.Use push if u wanna add temporarily. 

db.employees.updateMany(
    {email:"dan@gmail.com"},
    {$set:{hobbies:["Sports"]}}
);

db.employees.updateMany(
    {email:"dan@gmail.com"},
    {$pull:{hobbies:["Sports"]}}
);//push-adds element to the array, pull-removes element from the array.

