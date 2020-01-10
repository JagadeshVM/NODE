const mongoose = require("mongoose");
const schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/sampledb").then(
    (result)=>{
        console.log("connected successfully");
    }
    ).catch(
    (err)=>{
        console.log("error in connection");
    }
)
const userschema = new schema({
    username:{
        type:String
    },
    password:{
        type:String
    },
    email:{
        type:String
    }
})

module.exports=mongoose.model("User",userschema);//create a collection with name users follows the same schema also

