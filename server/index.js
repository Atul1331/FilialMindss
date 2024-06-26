import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import express from 'express'
import authRoutes from './routes/authRoutes.js'
import parentChildRoutes from './routes/parentChildRoutes.js'
// import messageRoutes from "./routes/messageRoutes.js";
// import userRoutes from "./routes/userRoutes.js";
import connectToMongoDB from './db/connectMongoDB.js'
// import { app, server } from "./socket/socket.js";

const app = express()

// load environment variables
dotenv.config()
// app.use(cors())

// PORT
const PORT = process.env.PORT || 5000

// request parsers
app.use(express.json())

// parse cookies
app.use(cookieParser())

// serve static files
app.use(express.static('public'))

// routing setup
app.all('/', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  next()
  res.send('Express on Vercel 🚀')
})
app.use('/api/auth', authRoutes)
app.use('/api/parentChild', parentChildRoutes)

// Handle unknown routes
app.get('*', (req, res) => {
  res.send('404: Page not found')
})

app.listen(process.env.PORT, () => {
  connectToMongoDB()
  if (process.env.NODE_ENV === 'development') {
    console.log(`app listening to port http://localhost:${PORT}`)
  } else {
    console.log(`app listening to port ${PORT}`)
  }
})

// Export the Express API
export default app
