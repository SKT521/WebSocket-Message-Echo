import WebSocket, {WebSocketServer} from 'ws';

const wss = new WebSocketServer({port:8000});

wss.on('connection', (ws:WebSocket) => {
    console.log("New client connected!");

    //When a message is recieved from the client
    ws.on('message', (message: string) => {
        console.log('Client has sent us: ${message');

        //Reply to the CLient
        ws.send(message.toUpperCase());
    });

    //On disconnection
    ws.on('close', ()=> {
        console.log('Client has disconnected!');
    });
});

console.log('WebSocket server is running on ws://localhost:8000');
