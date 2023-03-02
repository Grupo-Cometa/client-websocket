import WebSocket from 'ws';

export default class WebSocketClient
{
    private socket: WebSocket;

    constructor(url: string)
    {
        this.socket = new WebSocket(url)
    }

    onEvent(channel: string, callback: (data: any)=> any)
    {
        this.socket.on('open', ()=>{
            let message = JSON.stringify({
                type: 'subscribe',
                channel
            })

            console.log(message)
            this.socket.send(message)
        })

        this.socket.on('message', (data: any)=>{
            return callback(data)
        })
    }

    emit(channel: string, data: any)
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