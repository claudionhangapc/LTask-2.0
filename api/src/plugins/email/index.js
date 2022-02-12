require('dotenv').config()

module.exports = (fastify) => {
   /*
  * registra o transporter
  */
   fastify.register(require('fastify-nodemailer'), {
    //name: process.env.TRANSPORTER_NAME,
    host: process.env.TRANSPORTER_HOST,
    port: process.env.TRANSPORTER_PORT,
    //secure: true, // use TLS
    auth: {
        user: process.env.TRANSPORTER_AUTH_USER,
        pass: process.env.TRANSPORTER_AUTH_PASS
    }
  })
}
