const mongoose = require('mongoose');

const schema = mongoose.Schema;

mongoose.connect ("mongodb://localhost:27017/hackfest")
.then(result=>{
    console.log("connected");
})
.catch(err=>{
console.log(err);
})

const teamSchema = new schema({
    teamId:{
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    theme:{
        type: String,
        required: true
    },   
    contactNo:{
        type: Number,
        require: true
    },
    teamSize:{
        type: Number,
        required: true
    },
    edition:{
        type: String,
        required: true
    }
})

module.exports=mongoose.model('Team', teamSchema);
