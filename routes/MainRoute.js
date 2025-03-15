const router = require('express').Router()
const path = require('path')


// Main APP






router.get('/' , (req,res) => {
    res.sendFile(path.join(__dirname , '../public/index.html'))

})



router.get("/play"  , (req,res) => {
    res.sendFile(path.join(__dirname , '../public/pages/index.html'))
})


module.exports = router