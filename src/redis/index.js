import redis from 'redis'

const client = redis.createClient()

client.on('error', (err) => {
  console.log('[REDIS_ERROR]', err.message)
})

export default client