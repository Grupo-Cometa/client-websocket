"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSocketClient = void 0;
const ws_1 = __importDefault(require("ws"));
class WebSocketClient {
    constructor(url) {
        this.socket = new ws_1.default(url);
    }
    onEvent(channel, callback) {
        this.socket.on('open', () => {
            let message = JSON.stringify({
                type: 'subscribe',
                channel
            });
            console.log(message);
            this.socket.send(message);
        });
        this.socket.on('message', (data) => {
            return callback(data);
        });
    }
    emit(channel, data) {
        this.socket.on('open', () => {
            this.socket.send(JSON.stringify({
                type: 'publish',
                channel,
                data
            }));
        });
    }
}
exports.WebSocketClient = WebSocketClient;
