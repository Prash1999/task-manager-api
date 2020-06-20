const mongoose = require("mongoose")
const validator = require("validator")

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})



// const task = new Task({
//     descrption: "Going to trekking",
    
// })

// task.save().then(() =>{
//     console.log(task)
// }).catch((error) => {
//     console.log("Error!", error)
// })

