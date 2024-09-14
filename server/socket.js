const app = require('express')();
const http = require('http').createServer(app)
const io = require('socket.io')(http, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
})

io.on('connection', (socket) => {
  console.log('a user connected:', socket.id)

  // 监听客户端消息
  socket.on('message', (msg) => {
    console.log('message received:', msg)

    // 向客户端发送消息
    socket.emit('message', `Server received: ${msg}`)
  })

  // 监听断开连接
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

http.listen(3001, () => {
  console.log('Socket is running on port 3001')
})

module.exports = io
