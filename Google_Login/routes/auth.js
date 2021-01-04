const exp=require('express')
const router =exp.Router()
const passport=require('passport')

//desc- Auth with google
//route- GET /auth/google....goes to google consent screen(where we choose any email account)..comes with a code from google server.
router.get('/google', passport.authenticate('google',
 { 
     scope: ['profile'] //what info you want from google. We have taken only profile here
}));


//desc- Google auth callback
//route- GET /auth/google/callback, ....google api sends code in redirect link. Then here(down below) passport middleware exchanges code with google api and gets profile and then callback func defined in passport google strategy is fired.
router.get('/google/callback',  passport.authenticate('google', { failureRedirect: '/' }),
(req,res)=>{
    // res.send("Logged in mate!")
    res.redirect('/dashboard')//callback, if successful login
}
)

//desc- Logout
//route- GET /auth/logout 
router.get('/logout',(req,res)=>{
    req.logout()
    res.redirect('/')
}
)
module.exports =router


// const express = require('express')
// const passport = require('passport')
// const router = express.Router()

// // @desc    Auth with Google
// // @route   GET /auth/google
// router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

// // @desc    Google auth callback
// // @route   GET /auth/google/callback
// router.get(
//   '/google/callback',
//   passport.authenticate('google', { failureRedirect: '/' }),
//   (req, res) => {
//     res.redirect('/dashboard')
//   }
// )

// // @desc    Logout user
// // @route   /auth/logout
// // router.get('/logout', (req, res) => {
// //   req.logout()
// //   res.redirect('/')
// // })

// module.exports = router

// const express = require('express')
// const passport = require('passport')
// const router = express.Router()

// // @desc    Auth with Google
// // @route   GET /auth/google
// router.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }))

// // @desc    Google auth callback
// // @route   GET /auth/google/callback
// router.get(
//   '/auth/google/callback',
//   passport.authenticate('google', { failureRedirect: '/' }),
//   (req, res) => {
//     res.redirect('/dashboard')
//   }
// )

// module.exports = router
