db.employees.find(
    {location:{$exists:false}}
);//the documents which do not have location field will be displayed - exists operator

db.employees.find(
    {location:{$exists:true}}
);//the documents which have location field will be displayed - exists operator

db.employees.find(
    {department:{$in:["HR","Admin"]}}//in operator - either of the condition should be true
);

db.employees.find(
    {department:{$nin:["HR","Admin"]}}//nin- not in operator - neither of the condition should be true
);//department should not be HR or Admin-only those documents will be displayed

