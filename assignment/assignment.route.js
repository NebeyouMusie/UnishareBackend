// import router
const router = require("express").Router();


// import functions
const {
    submitAssignment,
  getAssignment,
  EditAssignment,
  deleteAssignment,
} = require("./assignement.controller");

//addpost route
router.post("/submitAssignment", submitAssignment);
router.delete("/deleteAssignment/:id", deleteAssignment);

//getpost route
router.get("/getAssignment", getAssignment);
router.put("/EditAssignment/:id",EditAssignment);

module.exports = router;

