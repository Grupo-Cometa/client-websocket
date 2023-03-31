export class WebSocketClient
{    
    constructor(private url: string){}

    sendMessage(channel: string, data: any){
        
        const socket = new WebSocket(this.url);

        socket.onopen = () =>{
            socket.send(
                JSON.stringify({
                    type: 'publish',
                    channel,
                    data
                })
            )
        }
    }

    onMessage(channel: string, callback: (data: any) => any) {

        const socket = new WebSocket(this.url);

        socket.onopen = () => {
            socket.send(
                JSON.stringify({
                    type: 'subscribe',
                    channel
                })
            )
        }

        socket.onmessage = (message: any) => {
            return callback(message)
        }
    }
}   