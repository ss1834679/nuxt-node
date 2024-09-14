import io from 'socket.io-client'

export default (context, inject) => {
  // 连接到 WebSocket 服务器
  const socket = io('http://localhost:3001')

  // 将 socket 注入到上下文中，可以在项目中的任何地方使用
  inject('socket', socket)
}
