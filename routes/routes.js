const express = require('express');
const handle= require('../handleRoutes/handleRoutes');

const router = express.Router(option={});


module.exports = function(req,res,next) { // Router factory
   
    router.get('/', handle.handleHom);                          //show home page
    router.post('/api/fileanalyse',handle.upload.single('upfile'),handle.handleFileAnalyse);
return router;
};