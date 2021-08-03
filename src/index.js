const express = require('express')
//const bodyParser = require('body-parser')

const app = express()
app.use(express.json())

app.get('/courses',(req,res)=>{
    const query = req.query
    console.log(query)
    return res.json(["curse 1","curse 2","curse 3"])
})

app.post('/courses',(req,res)=>{
    const body = req.body
    console.log(body)
    return res.json(["curse 1","curse 2","curse 3","curse 4"])
})

app.put('/courses/:id',(req,res)=>{
    const {id} = req.params
    console.log(id)
    return res.json(["curse 7","curse 2","curse 3","curse 4"])

})

app.patch('/courses/:id',(req,res)=>{
    return res.json(["curse 1","curse 2","curse 3","curse 14"])

})

app.delete('/courses/:id',(req,res)=>{
    return res.json(["curse 1","curse 3","curse 14"])

})

app.listen(3000,(req,res)=>{
    console.log('listening on port 3000')
})