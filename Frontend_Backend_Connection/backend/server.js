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

app.listen(port,()=>
{
    console.log(`Server running on ${port}`);
})