const fastifyPlugin = require('fastify-plugin')
const multer = require('fastify-multer') 
const path = require('path')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname,'..', '..', '..','uploads'))
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now()+'.png')
  }
})

const fileFilter = function (req, file, cb) {
  
  const allowedMines = [
    "image/png",
    "image/jpeg",
    "image/jpg",
  ]

  if(allowedMines.includes(file.mimetype)){
    cb(null,true)
  }else{
    cb(new Error("Invalid file type"))
  }
} 

const upload = multer({ 
  dest: path.resolve(__dirname,'..', '..', '..','uploads'), 
  storage,
  fileFilter,
})

async function uploadFile (fastify, options) {
  /*
  * registra as chaves
  * do certificado
  */

  fastify.register(multer.contentParser)


  /*
  * decorando o objeto
  * upload 
  */

  fastify.decorate('upload', upload)

}

module.exports = fastifyPlugin(uploadFile)