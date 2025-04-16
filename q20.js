db.employees.find(
    { department: "HR" },
);

db.employees.find(
    { department : {$eq: "HR"}}
);//eq-equal operator 

db.employees.find(
    { salary: { $gte: 2456 } },
);//gt-greater than operator,gte-greater than equal to operator

db.employees.find(
    { salary: { $lte: 2456 } },
);//lt-less than operator,lte-less than equal to operator
