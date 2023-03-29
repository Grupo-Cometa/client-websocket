"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSocketClient = void 0;
const ws_1 = __importDefault(require("ws"));
class WebSocketClient {
    constructor(url) {
        this.url = url;
    }
    sendMessage(channel, data) {
        const socket = new ws_1.default(this.url);
        socket.on('open', () => {
            socket.send(JSON.stringify({
                type: 'publish',
                channel,
                data
            }));
        });
    }
    onMessage(channel, callback) {
        const socket = new ws_1.default(this.url);
        socket.on('open', () => {
            socket.send(JSON.stringify({
                type: 'subscribe',
                channel
            }));
        });
        socket.on('message', (message) => {
            return callback(message);
        });
    }
}
exports.WebSocketClient = WebSocketClient;
