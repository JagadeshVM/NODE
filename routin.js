let express = require("express");
let router = express.Router();
var teams = require('../services/user');


// var name="test";
// let name;
// let theme = "";
// let contactNo = 0 ;
// let teamSize;
// let edition;
// let contactNos;

router.get("/home", (req,res)=>{
    console.log("requrl"+req.url+req.method);
    res.send("hey im localhost:3000");
})

router.post('/register', function(req,res,next) {
    teams.registerTeam(req.body).then(data=>{
        if(data){
            console.log(data);
            res.send("team has been registered")
        }
    }).catch(err=>{
        next(err);
        // console.log(err.stack);
        // res.send(err.message)
    })
})



// router.get("/register", (req,res)=>{
//     res.write(`<form type="POST" action="http://localhost:3000/register">
//     <label for="name">name</label>
//     <input type="text" name="name" ><br/>
//     <label for="theme">theme</label>
//     <input type="text" name="theme" ><br/>
//     <label for="contactNo">no</label>
//     <input type="number" name="contactNo" ><br/>
//     <label for="teamsize">teamsize</label>
//     <input type="number" name="teamsize" ><br/>
//     <label for="edition">edition</label>
//     <input type="text" name="edition" ><br/>
//     <button type="submit">submit</button>
// </form>`)
//     let themestatus=true;
//     let mobNoStatus=true;
//     let teamsizestatus=true;
//     if( theme.toLowerCase() != "robotics" && theme.toLowerCase() !="hardware" && theme.toLowerCase() !="software"){
//         themestatus=false;
//     }
//     if(teamSize != 3){ mobNoStatus=false;}
//     if(contactNo.toString().length != 10){teamsizestatus=false;}

//     if( themestatus==true && mobNoStatus==true && teamsizestatus==true){
//         res.send("success");
//     }
//     else{
//         res.send("failed");
//     }
// })

// router.post("/register", (req,res)=>{
//      name= req.body.name;
//      theme=req.body.theme;
//      contactNo=req.body.contactNo;
//      teamSize=req.body.teamsize;
//      edition=req.body.edition;
//      contactNos=contactNo.toString().length;
//     console.log(name, theme, contactNo, teamSize, edition, contactNos);

//     if( theme.toLowerCase() != "robotics" && theme.toLowerCase() !="hardware" && theme.toLowerCase() !="software"){
//         res.json({"message": "enter correct theme"});
//         }
//         else if(teamSize != 3){
//         res.json({"message": "Team size shoul be three"});
//         }
//         else if(contactNo.toString().length != 10 ){
//             res.json({"message": "contact number should be mininum 10 digits"});
//         }
//         else{
//         res.json("registered Successfully");
//     }

    

//     // res.send(`hey my name is ${name}`);
// })



module.exports= router;
