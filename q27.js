db.posts.aggregate([
    {$lookup:{
        from:"users",
        localField:"userId",
        foreignField:"_id",
        as:"user"
    }},
]); //lookup query from joins in SQL - linking from posts to users 

db.users.aggregate([
    {
      $lookup: {
        from: "posts",
        localField: "_id",
        foreignField: "userId",
        as: "posts"
      }
    },
    {
      $project: {
        name: 1,
        "posts.title": 1,
        "posts.desc": 1
      }
    },
    {$unwind: "$posts"}
  ]);
