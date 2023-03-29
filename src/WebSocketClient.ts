import WebSocket from 'ws';

export class WebSocketClient
{    
    constructor(private url: string){}

    sendMessage(channel: string, data: any){

        const socket = new WebSocket(this.url);

        socket.on('open', ()=>{
            socket.send(
                JSON.stringify({
                    type: 'publish',
                    channel,
                    data
                })
            )
        })
    }

    onMessage(channel: string, callback: (data: any) => any) {

        const socket = new WebSocket(this.url);

        socket.on('open', ()=> {
            socket.send(
                JSON.stringify({
                    type: 'subscribe',
                    channel
                })
            )
        })

        socket.on('message', (message: string) => {
            return callback(message)
        })
    }
}   