class Email {
  constructor (fastify) {
    this.fastify = fastify
  }

  /*
   * send email on signIn
   */
  async signUp (to, name, verified_key) {
    const result = this.fastify.nodemailer.sendMail({
      from: 'emaildeTeste@gmail.com',
      to: to,
      subject: 'foo',
      html: `<h1>Email de confirmação</h1>
      <h2>ola ${name}</h2>
      <p>Obrigado por se inscrever. Confirme seu e-mail clicando no link a seguir</p>
      <a href=http://localhost:80/confirm/${verified_key}> clica aqui</a>
      </div>`
    },(err, info) => {
      
      if (err) return err
     
      return info

      })

      return result

  }

  


}

module.exports = Email