db.employees.updateMany(
    {},
    {$set: {points: 0 }}
);
db.employees.updateMany(
    {department:"HR"},
    {$set: {points: 5 }}
);

db.employees.updateMany(
    {},
    { $inc : { points : 20}}
); //inc - increment operator - points will be increased by 20 for all employees. It sets as well as increments
