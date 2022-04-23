const fastifyPlugin = require('fastify-plugin')
const multer = require('fastify-multer') 

const { readFileSync } = require('fs')
const path = require('path')

async function auth (fastify, options) {
  /*
  * registra as chaves
  * do certificado
  */

  fastify.register(multer.contentParser)


  /*
  * decorando o objeto
  * multer
  */

  fastify.decorate('multer', multer)

}

module.exports = fastifyPlugin(auth)