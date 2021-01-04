// npm i express mongoose connect-mongo express-session pug express-handlebars dotenv method method-override moment morgan passport passport-google-oauth20

const exp=require('express')
const dotenv= require('dotenv')
const path=require('path')
const connectDB= require('./config_folder/database')
const morgan=require('morgan')//Requests to any page is shown in console
const exphbs = require('express-handlebars')
const mongoose=require('mongoose')
const passport=require('passport')
const session=require('express-session')
const MongoStore=require('connect-mongo')(session)//When a file is saved , nodemon restartsand user is logged out.Hence store the session.


//Loading config file from config folder
dotenv.config({path: './config_folder/config.env'})

//Passport config
require('./config_folder/passport.js')(passport)


connectDB()

const app=exp()

if(process.env.NODE_ENV==='development')
{
    app.use(morgan('dev'))//can use diff login instead of dev here
}

//pug engine
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))

// app.engine( '.hbs',exphbs({defaultLayout: 'main', extname: '.hbs'}))
// app.set('view engine', '.hbs')


//Session....b4 passport middleware
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false, //dont create session untill  something is stored
    store: new MongoStore({mongooseConnection:mongoose.connection})//current mongoose connection
  }))

//Passport middleware
app.use(passport.initialize())
app.use(passport.session())


//static folder
app.use(exp.static(path.join(__dirname,'public')))

//Routes
app.use('/',require('./routes/index'))
app.use('/auth',require('./routes/auth'))

//To access variables from env file we use process.env.variable_name
const PORT=process.env.port || 5000

app.listen(PORT, 
    console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT} `)
)