const multer = require('multer');
const { v4: uuidv4 } = require("uuid"); //v4 = version 4
const path = require('path');


const storage = multer.diskStorage({
    destination: function(req, file, cb){   //cb is callback
        cb(null, "./public/images/uploads") //destination folder for  uploads
    },
    filename: function(req,file,cb){
        const uniqueFilename = uuidv4(); //generate a unique filename using uuid
        cb(null, uniqueFilename+path.extname(file.originalname)); //use the unique filename  for the uploaded file and +path.extname(file.originalname) this is for file original extension
    }
});

const upload = multer({ storage: storage });

module.exports = upload;

/* index.js code for multer


const upload = require("./multer");



//handle file upload                             //this file below name come from profile.ejs name = "file"
router.post('/upload', isLoggedIn ,upload.single('file'), async (req, res) => {
  //access the uploaded file details via req.file
  if (!req.file) {
    return res.status(400).send('No files were uploaded.')
  }
  const user = await userModel.findOne({username: req.session.passport.user}); //username getting save in user here
  const post = await postModel.create({
    image: req.file.filename,  //all name taken from post.js
    imageText: req.body.filecaption,
    user: user._id
  });  //creating post
  user.posts.push(post._id);  //giving post id to user.js
  await user.save(); //noww the data save in moongodb
  res.redirect('/profile');
});



*/