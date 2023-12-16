const router = require("express").Router();

const { adduser,login, getuserbyid } = require("./user.controller");
const auth=require("../middleware/auth")

//registration route
router.post("/add", adduser);
router.post("/login", login);
router.get("/",auth,getuserbyid)


module.exports = router;

