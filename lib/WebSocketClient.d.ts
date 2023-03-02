import WebSocket from 'ws';
export declare class WebSocketClient {
    private socket;
    constructor(url: string);
    onEvent(channel: string, callback: (data: WebSocket.Data) => any): void;
    emit(channel: string, data: WebSocket.Data): void;
}
