const post = require("../model/post.database.js");

module.exports = {
  
  //declaration of addpost method to insert a post to the database
  addpost: async (req, res) => {
    //destructuring title from body
    const { title, description, date, postType } = req.body;
    const titlelength = title.trim().split();

    if (title.length > 10) {
      return res.status(400).json({ msg: "title can not proceed 10 characters ⚠" });
    }
    //check if the title and description is provided or not
    if(!title && !description){
      return res.status(400).json({ msg: "title and description should be provided ⚠" }); 
    }


    else if (!title) {
      return res.status(400).json({ msg: "title should be provided ⚠" });
    }
    else if (!description){
      return res.status(400).json({ msg: "description should be provided ⚠" }); 
    } 

    //insert the post to database
    try {
      
      const newpost = new post({
        title: req.body.title,
        description: req.body.description,
        date: req.body.date, 
        postType: req.body.postType,
        username: req.body.username,
        course: req.body.course,
      }); 

      const postedData = await newpost.save();
      res.status(200).json({
        msg: "post added successfully 🎉",
        data: postedData,
      });
      //check and display if there is an error
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // method declaration to retrieve all posts from the database
  getposts: (req, res) => {
    post
      .find({})
      .then(function (users) {
        res.json({
          data:users,
        });
      })
      //check and display if there is an error
      .catch(function (err) {
        console.log(err.message);
      });
  },


   postupdate: async (req, res) => {
    try {
      // Update the user's password and other fields in the database
      const updatedpost = await post.findByIdAndUpdate(
      req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      // Send a success response with the updated user object
      return res
        .status(200)
        .json({ msg: "Post successfully updated!!", updatedpost });
    } catch (err) {
      // Handle errors and send an error response
      console.error(err);
      return res.status(500).json(err);
    }
  },


  postdelete:async(req,res)=>{
try {
  const deletedpost = await post.findByIdAndDelete( req.params.id);
  return res
    .status(200)
    .json({ msg: "Post has been deleted!!!", deletedpost });
} 
catch (err) {
  // Handle errors and send an error response
  console.error(err);
  return res.status(500).json(err);
}

  }

};







