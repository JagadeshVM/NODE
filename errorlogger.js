let fs=require("fs");

let errorlogger=(err,req,res,next)=>{

    if(err){
    fs.writeFile("./errorlogger.txt",err.stack,(err1)=>{
        if(err1){
            console.log("Error occured During Logging");
        }
        
    });

    res.status(500);
    res.json({ "message": err.message});
    }
}

module.exports = errorlogger;
