const exp=require('express')
const dotenv=require('dotenv')
const connectDatabase= require('./config_folder/connectDB')
const cors=require('cors')

dotenv.config({path: './config_folder/config.env'})

const app=exp()
const port=process.env.PORT ||5000

app.use(cors())
app.use(exp.json())


connectDatabase()

//ROUTES
app.use('/exercises',require('./routes/exercise_route'))    
app.use('/users',require('./routes/user_route'))

console.log("Searching...")

let Userdb= require('./schema_models/user')

app.post("/login_be",async(req,res)=>
{
// 
    const userName=req.body.userName;
    const password=req.body.password;
    console.log(`email ${userName} , password is ${password}`);
    // res.send("Entered")
    const userDetails=await Userdb.findOne({userName:userName})
    
    console.log(userDetails);
    // if you don't use async & await, o/p dosen't come 
    res.send(userDetails)

})
app.listen(port,()=>
{
    console.log(`Server running on ${port}`);
})