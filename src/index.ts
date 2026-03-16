import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import postRoute from './routes/post.route.js';

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})


app.route('/post', postRoute);

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
