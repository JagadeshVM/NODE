const user = require('./dbConnection');

const userdata = new user({
    username:"user1",
    password:1234,
    email:"user1@gmail.com"
})

const insertdata=()=>{
    userdata.save().then(
        (result)=>{
            console.log("insertion was successfull");
        }
    ).catch( (err)=>{
        console.log("some insertion error");
    })         //
} 

const finddata= ()=>{
     return user.find().then(
        (result)=>{
            console.log(result);
            return result;
        }
        
    ).catch((error)=>{
        console.log("insertion fail", error);
    })
}

module.exports = finddata,insertdata;
