import WebSocketClient from "../src/WebSocketClient";

const socket = new WebSocketClient('ws://localhost:6000');

socket.onEvent('channel', (data)=>{
    console.log(data)
})

socket.emit('channel', 'myData')