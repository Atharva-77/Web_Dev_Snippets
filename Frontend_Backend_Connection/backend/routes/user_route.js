const exp= require('express')
const router= exp.Router()
let Userdb= require('../schema_models/user')

router.get('/',(req,res)=>
{
    Userdb.find()       //find method returns a promise.So result returened in json format
        .then(users=> res.json(users)) 
        .catch(err=> res.status(400).json('Error: '+err))
});

router.post('/add',(req,res)=>
{
    const userName=req.body.username;
    const newUser=new Userdb({
                     userName
                     })

    newUser.save()
        .then(()=>res.json('User added'))
        .catch(err=>res.status(400).json("Error is "+err))
});

router.get('/searching',(req,res)=>
{
    const searching=req.query.userName;
    Userdb.find({userName:{$regex:searching ,$options: '$i'}})
        .then(data=> {
            res.send(data);
        })

})

module.exports= router
// Default for router files