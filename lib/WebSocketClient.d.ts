export declare class WebSocketClient {
    private url;
    constructor(url: string);
    sendMessage(channel: string, data: any): void;
    onMessage(channel: string, callback: (data: any) => any): void;
}
