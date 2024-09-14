const mongoose = require('mongoose')

let isConnected = false

const connectDB = async () => {
  if (isConnected) {
    console.log('=> Using existing MongoDB connection')
    return
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/mydatabase', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    isConnected = db.connections[0].readyState
    console.log('=> Created a new MongoDB connection')
  } catch (error) {
    console.error('=> MongoDB connection error:', error)
  }
}

module.exports = connectDB
