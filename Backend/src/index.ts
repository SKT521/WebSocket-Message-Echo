import WebSocket, {WebSocketServer} from 'ws';

const wss = new WebSocketServer({port:8000});

wss.on('connection', (ws:WebSocket) => {
    console.log("New client connected!");

    //When a message is recieved from the client
    ws.on('message', (message: any) => {
        console.log(`Client has sent us: ${message}`);

        //Reply to the CLient
        if (typeof message === 'string') {
            ws.send(message.toUpperCase());  // Convert message to uppercase and send back
        } else {
            // If message is not a string, convert it to a string first
            ws.send(message.toString().toUpperCase());
        }
    });

    //On disconnection
    ws.on('close', ()=> {
        console.log('Client has disconnected!');
    });
});

console.log('WebSocket server is running on ws://localhost:8000');
