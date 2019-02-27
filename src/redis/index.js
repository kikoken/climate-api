import redis from 'redis'

const client = redis.createClient(6379, 'redis')

client.on('error', (err) => {
  console.log('[REDIS_ERROR]', err.message)
})

export default client