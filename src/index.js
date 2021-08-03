const express = require('express')
//const bodyParser = require('body-parser')

const app = express()


app.get('/',(req,res)=>{
    return res.json({message:"hello"})
})

app.listen(3000,(req,res)=>{
    console.log('listening on port 3000')
})