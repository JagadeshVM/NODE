var express = require('express');
var router = express.Router();
var finddata = require('../Database/admin')


router.get('/root', function(req,res,next){
    let data = finddata()
    // res.send("Data inserted successfully to mongodb server sampledb tadaa");
    console.log("connectd");
    data.then(
        data1=>{
            res.send(data1);
        }
    )

})

module.exports = router;
