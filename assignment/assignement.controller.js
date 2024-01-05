const assignment = require("../model/assignment.database");

module.exports = {
  //declaration of addpost method to insert a post to the database
  submitAssignment: async (req, res) => {
    //destructuring title from body
    // const { course,file } = req.body;

    //insert the post to database
    try {
      const newassignment = new assignment({
        course: req.body.course,
        file: req.body.file,
       
      });

      const postedAssignment = await newassignment.save();
      res.status(200).json({
        msg: "Assignment submitted successfully 🎉",
        data: postedAssignment,
      });
      //check and display if there is an error
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // method declaration to retrieve all posts from the database
  getAssignment: (req, res) => {
    assignment
      .find({})
      .then(function (assignment) {
        res.json({
          data: assignment,
        });
      })
      //check and display if there is an error
      .catch(function (err) {
        console.log(err.message);
      });
  },

  EditAssignment: async (req, res) => {
    try {
      // Update the user's password and other fields in the database
      const updatedAssignment = await assignment.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      // Send a success response with the updated user object
      return res
        .status(200)
        .json({ msg: "Assignment successfully updated!!", updatedAssignment });
    } catch (err) {
      // Handle errors and send an error response
      console.error(err);
      return res.status(500).json(err);
    }
  },

  deleteAssignment: async (req, res) => {
    try {
      const deletedAssignment = await assignment.findByIdAndDelete(req.params.id);
      return res
        .status(200)
        .json({ msg: "Assignment has been deleted!!!", deletedAssignment });
    } catch (err) {
      // Handle errors and send an error response
      console.error(err);
      return res.status(500).json(err);
    }
  },
};
