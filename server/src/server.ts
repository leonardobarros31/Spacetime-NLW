import 'dotenv/config'

import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'

const app = fastify()

app.register(cors, {
  origin: 'true', // todas as URLs de front-end podem acessar o back-end
})

app.register(jwt, {
  secret: 'cun1093y502189nty19t9p0yt5r1p10c7n9151275091',
})

app.register(authRoutes)
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('🚀 listening on http://localhost:3333')
  })
