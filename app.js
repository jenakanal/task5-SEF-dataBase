const mongodb = require("mongodb")

const mongoClient = mongodb.MongoClient

const connectionUrl  = "mongodb://127.0.0.1:27017"

const dbName = "task5"

mongoClient.connect(connectionUrl, (error , data)=>{
    if(error) {
       return console.log(error)
    }
    console.log("All dane")

    const db = data.db(dbName)
// db.collection("users").insertOne({
//     name : "jena",
//     age : 29
// })
// db.collection("users").insertOne({
//     name : "mina",
//     age : 34
// })

// db.collection("users").insertMany([
//     {
//         name : "mariam",
//         age : 25
//     },
//     {
//         name : "hosam",
//         age : 14
//     },
//     {
//         name : "kariam",
//         age : 27
//     },
//     {
//         name : "hany",
//         age : 27
//     },
//     {
//         name : "hana",
//         age : 27
//     },
//     {
//         name : "samia",
//         age : 27
//     },
//     {
//         name : "randa",
//         age : 27
//     },
//     {
//         name : "kamal",
//         age : 22
//     },
//     {
//         name : "nabil",
//         age : 34
//     },
//     {
//         name : "melad",
//         age : 45
//     },

// ])


// db.collection("users").find({age : 27}).toArray((error,data1)=>{
//     if(error){
//         return console.log(error)
//     }
//     console.log(data1)
// })
// db.collection("users").find({age : 27}).limit(3).toArray((error,data1)=>{
//     if(error){
//         return console.log(error)
//     }
//     console.log(data1)
// })


// db.collection("users").updateOne({_id:mongodb.ObjectId("66b06690e54003d3c5afb308")},{
//     $set:{name : "marina"},
//     $inc : {age : 5}

// })
// .then((data2)=>{console.log(data2)})
// .catch((error)=>{console.log(error)})


// db.collection("users").updateOne({_id:mongodb.ObjectId("66b06690e54003d3c5afb309")},{
//     $set:{name : "maher"},
//     $inc : {age : 5}
// })
// .then((data2)=>{console.log(data2)})
// .catch((error)=>{console.log(error)})

// db.collection("users").updateOne({_id:mongodb.ObjectId("66b067e29fcc0e314e93a3fd")},{
//     $set:{name : "kariam"},
//     $inc : {age : 5}
// })
// .then((data2)=>{console.log(data2)})
// .catch((error)=>{console.log(error)})


// db.collection("users").updateOne({_id:mongodb.ObjectId("66b067e29fcc0e314e93a3fe")},{
//     $set:{name : "katy"},
//     $inc : {age : 5}
// })
// .then((data2)=>{console.log(data2)})
// .catch((error)=>{console.log(error)})


// db.collection("users").updateMany({age : 27},{
//     $inc : {age : 10}
// })
// .then((data4)=>{console.log(data4)})
// .catch((error)=>{console.log(error)})


// db.collection("users").deleteMany({age : 44})
// .then((data5)=>{console.log(data5.deletedCount)})
// .catch((error)=>{console.log(error)})






// طريقة اخرة لتعديل الاسماء لاول 4 اسماء ولم تكتمل
db.collection("users").find({}).limit(5).toArray((error,dataa)=>{
    if (error) {
        return console.log(error)
    }
    console.log(dataa)

    db.collection("users").updateMany({dataa},{
        $set : {name : "samir1"},
        $set : {name : "samir2"},
        $set : {name : "samir3"},
        $set : {name : "samir4"},
    })
    
    
})











})



