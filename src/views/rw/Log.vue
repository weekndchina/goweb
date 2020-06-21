<template>
  <v-container
      grid-list-xl
      fluid
    >
    <v-card width="600">
    <v-simple-table height="400" dark>
        <pre class="caption ml-4">
          {{ receiveMessage }}
        </pre>
    </v-simple-table>
  </v-card>
</v-container>
</template>

<script>
  export default {
    name : 'log',
    data() {
      return {
        webSocket: null,
        receiveMessage: '',
        sendMessage: '',
      }
    },
    created() {
      this.initWebSocket();
    },
    destroyed() {
      this.webSocket.close() //离开路由之后断开websocket连接
    },
    methods: {
      // 初始化 webSocket
      initWebSocket () {
        // 创建 WebSocket 对象
        this.webSocket = new WebSocket('ws://127.0.0.1:9090/ws?filename=test.txt')
        this.webSocket.onopen = this.onOpenWebSocket
        this.webSocket.onmessage = this.onMessageWebSocket
        this.webSocket.onerror = this.onErrorWebSocket
        this.webSocket.onclose = this.closeWebSocket
      },
      // 连接建立之后执行 send 方法发送数据
      onOpenWebSocket () {
        console.log('链接建立成功!')
        this.sendWebSocket('链接建立成功')
      },
      onErrorWebSocket () {
        this.initWebSocket()
      },
      onMessageWebSocket (e) {
        this.receiveMessage = e.data
      },
      sendWebSocket (Data) {
        this.webSocket.send(Data)
      },
      closeWebSocket (e) {
        console.log('断开连接', e)
      }
    },
  }
</script>

<style>

</style>
