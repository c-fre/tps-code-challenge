const express = require('express')
const app = express()

app.get("/api", (req,res) =>{
    res.json({"users": ["test1", "test2"]})
})

app.listen(4000, () => {console.log("Express Started On Port 4000")})