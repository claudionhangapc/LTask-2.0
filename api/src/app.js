const app = require('fastify')({
  loger:true
})

app.get('/', function(request,replay){
  replay.send({hello:'Word'})
})

module.exports = app