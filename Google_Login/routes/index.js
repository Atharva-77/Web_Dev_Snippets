const exp=require('express')
const router =exp.Router()
const {ensureAuth,ensureGuest}=require('../middleware/auth_middleware')

router.get('/',ensureGuest,(req,res)=> {
    // res.render('login',{
    //     layout: 'login'
    // })
    // res.render('../views/layouts/login.pug')
    res.render('login')

    // res.render('login', {
    //     layout: 'login',
    //   })
    // })
})


router.get('/dashboard',ensureAuth,(req,res)=> {
    // console.log(req.user)
    res.render('dashboard')//dashboard in small letters. This file is rendered frm views
})

//secret page
router.get('/secretpg',ensureAuth,(req,res)=> {
    res.render('Anotherpg')
})
module.exports =router