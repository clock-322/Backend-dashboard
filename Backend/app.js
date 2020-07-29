const express=require("express")
const app=express()
const port=process.env.PORT || 3000
let bodyParser=require('body-parser')
const cors = require('cors')


app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())

app.use(require(__dirname+'/app/routes/authRoutes'))
app.use(require(__dirname+'/app/routes/customerRoutes'))

app.listen(port,()=>{
    console.log('Your application is running on: '+port)
})