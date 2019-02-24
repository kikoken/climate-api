import redis from 'redis'

const host = process.env.REDIS_HOST || 'localhost'
const client = redis.createClient(6379, host)

client.on('error', (err) => {
  console.log('[REDIS_ERROR]', err.message)
})

export default client