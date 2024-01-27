// import router 
const router = require("express").Router();

// import functions 
const {addpost,getposts,postupdate,postdelete}=require("./post.controller")

//addpost route
router.post("/",addpost )
router.delete("/:id",postdelete)

//getpost route
router.get("/",getposts)
router.put('/:id',postupdate)

module.exports = router;

