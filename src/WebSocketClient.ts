import WebSocket from 'ws';

export class WebSocketClient
{    
    constructor(private url: string, private token: string, private channel: string){}

    sendMessage(data: any){

        const socket = new WebSocket(this.url, {
            headers: {
                authorization: `Bearer ${this.token}`,
                channel: this.channel
            }
        });

        socket.on('open', ()=>{
            socket.send(data)
        })
    }

    onMessage(callback: (data: any) => any){
        const socket = new WebSocket(this.url, {
            headers: {
                Authorization: this.token,
                channel: this.channel
            }
        });

        socket.on('message', (data: any)=>{
            return callback(data)
        })
    }
}   