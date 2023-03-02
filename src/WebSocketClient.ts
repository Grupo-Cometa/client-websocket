import WebSocket from 'ws';

export default class WebSocketClient
{
    private socket: WebSocket;

    constructor(url: string)
    {
        this.socket = new WebSocket(url)
    }

    onEvent(channel: string, callback: (data: WebSocket.Data)=> any)
    {
        this.socket.on('open', ()=>{
            let message = JSON.stringify({
                type: 'subscribe',
                channel
            })

            console.log(message)
            this.socket.send(message)
        })

        this.socket.on('message', (data: WebSocket.Data)=>{
            return callback(data)
        })
    }

    emit(channel: string, data: WebSocket.Data)
    {
        this.socket.on('open', ()=>{
            this.socket.send(JSON.stringify({
                type: 'publish',
                channel,
                data
            }))
        })
    }
}   