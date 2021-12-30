const server = require('./src/app')

const port = process.env.Port || 3000
const host = process.env.HOST || '0.0.0.0';
const start = async ()=>{
  try{
    await server.listen({port,host})
  }catch(err){
    server.log.error(err)
    process.exit(1)
  }
}

start()