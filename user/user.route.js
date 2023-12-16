const router = require("express").Router();

const { adduser,login, getuserbyid,update } = require("./user.controller");
const auth=require("../middleware/auth")

//registration route
router.post("/add", adduser);
router.post("/login", login);
router.get("/",auth,getuserbyid);
router.put("/update", update);


//export the module 
module.exports = router;

