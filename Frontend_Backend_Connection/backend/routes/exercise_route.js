const exp= require('express')
const router= exp.Router()
let Exercisedb= require('../schema_models/exercise')

router.get('/',(req,res)=>
{
    Exercisedb.find()       //find method returns a promise.So result returened in json format
        .then(exercise=> res.json(exercise))   
        .catch(err=> res.status(400).json('Error: '+err))
});

router.post('/add',(req,res)=>
{
    const userName=req.body.userName;
    const description=req.body.description;
    const duration=Number(req.body.duration)
    const date=Date.parse(req.body.date)

    const newExercise=new Exercisedb({
        userName,
        description,
        duration,
        date
    })  

    newExercise.save()
    .then(()=>res.json('Exercise added'))
    .catch(err=>res.status(400).json("Error is "+err))  
});

//Get user details for particular id
router.get('/:id',(req,res)=>
{
    Exercisedb.findById(req.params.id)
    .then(exer=> res.json(exer))
    .catch(err=> res.status(400).json("Error is "+err))
})

//Delete user details for particular id
router.delete('/:id',(req,res)=>
{
    Exercisedb.findByIdAndDelete(req.params.id)
    .then(()=> res.json('Exercise delete'))
    .catch(err=> res.status(400).json("Error is "+err))
})

//Update user details for particular id
router.post('/update/:id',(req,res)=>
{
    Exercisedb.findById(req.params.id)
     .then(exerc=> {

        exerc.userName=req.body.userName;
        exerc.description=req.body.description;
        exerc.duration=Number(req.body.duration);
        exerc.date=Date.parse(req.body.date);

        exerc.save()
         .then(()=>res.json('Exercise updated!!'))
         .catch(err=>res.status(400).json("Error is "+err));  

     })

    .catch(err=> res.status(400).json("Error is "+err));
})
module.exports= router
// Default for router files