//crud operations

// const mongodb = require("mongodb")
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require("mongodb")

const connectioURL = "mongodb://127.0.0.1:27017"
const databaseName = "task-manager"



MongoClient.connect(connectioURL, { useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
    if(error) {
        return console.log("Unable to connect database!")
    }

    const db = client.db(databaseName)

    // db.collection("users").deleteMany({
    //     age:20
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    db.collection("tasks").deleteOne({
        description : "Deleting an videos"
    }).then((result)=>{
        console.log(result.deletedCount)
    }).catch((error)=>{
        console.log(error)
    })
    //  db.collection("users").updateOne({
    //     _id: new ObjectID("5ec616ac04ae8c2a5cbcbb26")
    // },{
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) =>{
    //     console.log(result)
    // }).catch((error) =>{
    //     console.log(error)
    // })

    // db.collection("tasks").updateMany(
    //     {
    //         completed :false
    //      },
    //    {
    //     $set: {
    //         completed: true
        
    //    }
    //     }
    // ).then((result)=>{
    //     console.log(result.modifiedCount)
    // }).catch((error)=>{
    //     console.log(error)
    // })


})