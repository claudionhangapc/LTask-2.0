module.exports = (fastify) => {
  fastify.register(
    require('fastify-cors'),
    {
      origin: process.env.CORS_ORIGIN ?? '*'
    }
  )
}
