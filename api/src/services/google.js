const {OAuth2Client} = require('google-auth-library')
const base64url = require('base64url');
const {google} = require('googleapis');
const user = require('./user')

class Google {
  constructor (fastify) {
    this.fastify = fastify
    this.user = new user(fastify)
  }

 async login( code, client_id, redirect_uri ){

  const oauth2Client  = new google.auth.OAuth2(
    client_id,
    '',
    redirect_uri)

  //const {tokens} = await oauth2Client.getToken(code);
  /*const payload = JSON.parse(base64url.decode(tokens.id_token.split('.')[1]))

  const email = payload.email*/
  const email = "emaildteste90@gmail.com"
  const user_old = await this.user.fetchUserByEmail(email)

  if(!user_old){
    const user_new =  await this.user.siginupByGoogleLogin(email, 'password', 'name')
    return user_new 
  }

  const login_with_email = await this.user.loginOnlyByEmail(email)
  return login_with_email

 }

}

module.exports = Google