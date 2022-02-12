const app = require('fastify')({
  loger:true
})

/*
* register plugins
*/
app.register(require('./plugins/jwt/auth_middleware'))

require('./plugins/conection')(app)
require('./plugins/cors')(app)
require('./plugins/email/index')(app)

/*
* register routes
*/
app.register(require('./routes/ping'), { prefix: '/ping' })
app.register(require('./routes/user'), { prefix: '/users' })
app.register(require('./routes/project'), { prefix: '/projects' })

app.register(require('./routes/color'), { prefix: '/colors' })
app.register(require('./routes/category'), { prefix: '/categories' })
app.register(require('./routes/task'), { prefix: '/tasks' })

module.exports = app