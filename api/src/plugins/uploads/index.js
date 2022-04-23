const fastifyPlugin = require('fastify-plugin')
const multer = require('fastify-multer') 

const upload = multer({ dest: 'uploads/' })

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