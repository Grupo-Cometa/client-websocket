"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSocketClient = void 0;
class WebSocketClient {
    constructor(url) {
        this.url = url;
    }
    sendMessage(channel, data) {
        const socket = new WebSocket(this.url);
        socket.onopen = () => {
            socket.send(JSON.stringify({
                type: 'publish',
                channel,
                data
            }));
        };
    }
    onMessage(channel, callback) {
        const socket = new WebSocket(this.url);
        socket.onopen = () => {
            socket.send(JSON.stringify({
                type: 'subscribe',
                channel
            }));
        };
        socket.onmessage = (message) => {
            return callback(message);
        };
    }
}
exports.WebSocketClient = WebSocketClient;
