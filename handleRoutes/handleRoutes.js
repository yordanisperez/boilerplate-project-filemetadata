const multer = require('multer');
const TIMEOUT=10000;

// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, process.cwd() + '/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
  
  var upload = multer({ storage: storage })

function handleHom(req, res) {
    console.log("Manipulador de Peticion 'handleHom' fue llamado. ");
    res.sendFile(process.cwd() + '/views/index.html');
    
  }

  function handleFileAnalyse(req,res,next){
    console.log("Manipulador de Peticion 'handleFileAnalyse' fue llamado. ");
    const file = req.file
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
    }
      res.json({name:file.originalname,type:file.mimetype,size:file.size})


  }
  exports.handleHom=handleHom;
  exports.handleFileAnalyse=handleFileAnalyse;
  exports.upload=upload;