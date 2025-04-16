db.employees.updateOne(
    {email:"dan@gmail.com"},
    {$set:{department:"HR"}},
    {upsert:true}
);//upsert = combination of update and insert
db.employees.updateOne(
    {email:"dat@gmail.com"},
    {
        $set
        :{
            name:"Daniel",
            email:"dan@gmail.com",
            department:"HR",
            salary:5000,
            location:["FL","LA"],
            date:Date(), 
        }
    }
);