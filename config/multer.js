import multer from 'multer'
import path from 'path'
 
const storage=multer.diskStorage({
    // destination: function (req, file, cb) {
    //     cb(null, 'tmp')
    //   },
    //this is for the creating filename
    filename:function(req,file,cb)
    {
        cb(null,file.originalname+"_" + Date.now()+ path.extname(file.originalname))
    },
     
})
 const uploads=multer({storage:storage})
 export default uploads