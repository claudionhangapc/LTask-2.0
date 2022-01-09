const app = require('fastify')({
  loger:true
})

/*
* register plugins
*/
app.register(require('./plugins/jwt/auth_middleware'))

require('./plugins/conection')(app)

/*
* register routes
*/
app.register(require('./routes/ping'), { prefix: '/ping' })
app.register(require('./routes/user'), { prefix: '/users' })
app.register(require('./routes/project'), { prefix: '/projects' })

module.exports = app