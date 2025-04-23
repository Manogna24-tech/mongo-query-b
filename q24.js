db.users.insertMany([
{
    name:"name1",
},
{
    name:"name2",
},
]);
db.posts.insertMany([
{
    title:"title 1",
    desc:"desc 1",
    userId:ObjectId("68086e1899be6669f1b5f89b"),
},
{
    title:"title 2",
    desc:"desc 2",
    userId:ObjectId("68086e1899be6669f1b5f89b"),
},
{
    title:"title 3",
    desc:"desc 3",
    userId:ObjectId("68086e1899be6669f1b5f89c"),

}
]);
db.userPosts.insertMany([
{
    title: "title 1",
    desc: "desc 1",
    name: "name1",
},
{
    title: "title 2",
    desc: "desc 2",
    name: "name1",
},
{
    title: "title 3",
    desc: "desc 3",
    name: "name2",
}
]);