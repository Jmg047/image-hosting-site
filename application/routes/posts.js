const express = require('express');
const router = express.Router();
const db = require('..conf/database');
const multer= require('multer');
const sharp = require('sharp');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)

        let fileExt = file.mimetype.split("/")[1];
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage })

router.post("/create", function(req,res,next){
    let uploadedFile = file.file.path;
    let thumbnailName = `thumbnail-${req.file.filename}`
    let destinationOfThumbnail = `${req.file.destination}/${thumbnailName}`;
    const {title, description} = req.body;
    const userId = req.session.userId; 

    sharp(uploadedFile)
    .resize(200)
    .toFile(destinationOfThumbnail)
    .then(function(){
        let baseSQL = `INSERT INTO posts (title, description, image, thumbnail, fk_authorId) VALUE (?,?,?,?,?)`
        db.query(baseSQL,[title,description,uploadedFile,destinationOfThumbnail,userId])
    })
    .then(function([results,fields]){
        if(results && results.affectedRows){
            req.flash("success", "Your post has been created!");
            req.session.save(function(saveErr){
                res.redirect('/');
            })
        }
    })
    .catch(err => next(err));
})

module.exports = router;