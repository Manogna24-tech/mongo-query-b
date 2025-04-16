db.employees.find(
    {salary:{$gt:2000},
    department:{$eq:"HR"}
});

db.employees.find({
    $or:[
        {salary:{$gt:2000}},
        {department:{$eq:"HR"}}
],
}); //or operator - either of the condition should be true

db.employees.find({
    $and:[
        {salary:{$gt:2000}},
        {department:{$eq:"HR"}}
],
});//and operator - both the conditions should be true

