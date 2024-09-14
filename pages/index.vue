<template>
  <div id="home">
    <div>
      <h1>WebSocket Demo</h1>
      <input v-model="message" placeholder="Enter a message" />
      <button @click="sendMessage">Send Message</button>
      <p>Received from server: {{ response }}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import axios from "axios"
export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data () {
    return {
      message: '',
      response: ''
    }
  },
  computed: {
  },
  mounted () {
    // 监听来自服务器的消息
    this.$socket.on('message', (msg) => {
      this.response = msg;
    });
  },
  methods: {
    sendMessage () {
      // 向服务器发送消息
      this.$socket.emit('message', this.message);
    }
  }
}
</script>
<style scoped>
</style>
