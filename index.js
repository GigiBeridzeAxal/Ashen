const express = require('express')
const app = express()
const path = require('path')

app.use(express.json())
app.use(express.static(path.join(__dirname , 'public')))
app.use(express.static(path.join(__dirname , 'public/images')))

app.use('/' , require('./routes/MainRoute'))



app.listen(4000 , console.log("Server Succesfuly Launched"))