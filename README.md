# client-websocket

```javascript

const { WebSocketClient } = require('grupo-cometa-client-websocket');

const socket = new WebSocketClient('ws://localhost:6000');

socket.onMessage('channel', (data)=>{
    console.log(data)
})

socket.sendMessage('channel', 'myMessage');

```