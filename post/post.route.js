// import router 
const router = require("express").Router();


// import functions 
const {addpost,getposts}=require("./post.controller")

 


//addpost route
router.post("/",addpost )

//getpost route
router.get("/",getposts)

module.exports = router;
