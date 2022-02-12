class Email {
  constructor (fastify) {
    this.fastify = fastify
  }

  /*
   * send email on signIn
   */
  async signIn (from, to) {
    const result = this.fastify.nodemailer.sendMail({
      from: from,
      to: to,
      subject: 'foo',
      text: 'bar'
    },(err, info) => {
      
      if (err) return err
     
      return info

      })

      return result

  }

  


}

module.exports = Email