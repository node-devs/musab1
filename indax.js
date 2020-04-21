const express = require("express")
const app = express()

app.git("/",function(req,res){

    app.send("Welcome")
})
app.listen("1234")
console.log("server start")
