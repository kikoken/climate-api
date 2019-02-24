import redis from 'redis'
import path from 'path'
import dotenv from 'dotenv';
dotenv.config({ path: path.resolve('./app.env')});

const client = redis.createClient({
  port:process.env.REDIS_PORT, 
  host:process.env.REDIS_HOST, 
  password: process.env.REDIS_PASS
})

client.on('error', (err) => {
  console.log('[REDIS_ERROR]', err.message)
})

export default client