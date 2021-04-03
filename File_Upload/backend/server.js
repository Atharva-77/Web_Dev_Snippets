const exp=require('express')
const dotenv=require('dotenv')
const connectDatabase= require('./config_folder/connectDB')
const cors=require('cors')
// const path = require('path')

//Loading config file from config folder
dotenv.config({path: './config_folder/config.env'})


const app=exp()
const port=5000


app.use(cors())
connectDatabase()

app.use('/upload',require('./uploadroute'))

// app.use(exp.json())




app.listen(port, ()=>
{
    console.log(`Server is running on port ${port}`)
});