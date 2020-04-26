const express = require("express")
const app = express()

app.get("/",function(req,res){

    res.send("Welcome" + req.query.name)
})
app.listen(6234)
console.log("server start")
