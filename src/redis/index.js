import redis from 'redis'

const client = redis.createClient(process.env.REDIS_URL)

client.on('error', (err) => {
  console.log('[REDIS_ERROR]', err.message)
})

export default client