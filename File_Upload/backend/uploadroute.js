const exp = require('express')
const router= exp.Router()

const multer = require('multer')

// const generateToken= require('../generateToken')

// let RegisterDb=require('../schema_model/register')


router.get('/hi',(req,res)=>
{
    res.send("get req")
    // console.log("GET REQ");
});

const fs=require("fs");
const { promisify } = require('util');
const pipeline=promisify(require("stream").pipeline)

const path = require('path');
// const filePath = path.join(__dirname, '/pictures');

const upload =multer()
router.post('/add', upload.single("file"),async(req,res)=>
{
    
    //    console.log("POST REQ",req.file.mimetype.split("/"));
    //    console.log("Name",req.file.originalname);
    //    console.log("streams",exp.static(path.join(__dirname, '/public')));
  try{
    // console.log("Direc posn",`${__dirname}/../public/`);
    let x=path.join(__dirname, '../public/Uploadedimages/');

    let fx=`${x}${req.file.originalName}`
    console.log("PATH ",fx);
    // console.log("FILE",req.file);
    console.log("STREAM ",req.file.stream);
    // console.log("Name ",req.file.originalName);


   await pipeline(req.file.stream,fs.createWriteStream(fx))
   console.log("response to be send",fx);
   res.send(fx)
   
  }
  catch(error)
  {
      console.log("ITS ERROR");
      res.send(error)
  }
   
});

module.exports=router;