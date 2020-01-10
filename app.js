let express = require("express");
let app=express();
let router= require("./routing/routing")
app.use("/", router);

app.listen(3000,()=>{
console.log("serve is running");
})
