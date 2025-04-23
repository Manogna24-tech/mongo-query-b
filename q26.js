//aggregation framework
db.employees.aggregate([
    {}, //pipeline 1
    {}, //pipeline 2
    {}, //pipeline 3
])

db.employees.aggregate([
    {$match: { depeartment: {eq: "HR"}}}
]);

db.employees.aggregate([
    {$match: {department: {$eq: "HR"}}},
    {$project: {name: 1, email: 1, department: 1}}
]);

db.employees.aggregate([
    {$match: {department: {$eq: "HR"}}},
    {$project: {name: 1, email: 1, department: 1}},
    {$sort: {name: 1}}
]); 

db.employees.aggregate([
    {$match: {department: {$eq: "HR"}}},
    {$addFields: {Bonus:"NA"}},
    {$project: {name: 1, email: 1, department: 1, Bonus: 1}},
    {$sort: {name: 1}},
    { $skip:  1},
    { $limit: 1}
]); 

db.employees.aggregate([
    {$match: {department: {$eq: "HR"}}},
    {$project: {name: 1, email: 1, department: 1, Bonus: "NA"}},
    {$sort: {name: 1}},
    { $skip:  1},
    { $limit: 1}
]); 

db.employees.aggregate([
    { $group: { _id: "$department", total: { $sum: "salary"} } },
]);

db.employees.aggregate([
    {$match: {department: {$in: ["HR","IT"]}}},
    { $group: { _id: "$department", total: { $sum: "salary"} } },
]);

db.employees.aggregate([
    {$match:{name:{$ne:""}}},
    {$project:{_id:0,name:1,location:1}}
]); 

db.employees.aggregate([
    {$match:{name:{$ne:""}}},
    {$project:{_id:0,name:1,location:1}},
    {$unwind: "$location"}
]); 

db.employees.aggregate([
    {$match:{department:{$in:["HR","IT"]}}},
    {$project:{_id:0,department:1,salary:1}},
    { $group: { _id: "$department", total: { $sum: "salary"} } },
]);

db.employees.aggregate([
    {$match:{department:{$in:["HR","IT"]}}},
    {$project:{_id:0,department:1,salaryInt:{input:"salary",to:"int"}}},
    { $group: { _id: "$department", total: { $sum: "salaryInt"} } },
]);

