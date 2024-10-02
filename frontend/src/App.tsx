import React, { useEffect, useState } from "react";

const App: React.FC = () => {
  //State to store the message tyed by the user
  const [message, setMessage] = useState<string>("");

  //State to store the message received from the server
  const [receivedMessage, setReceivedMessage] = useState<string>("");

  //State to store the WebSocket instance, initiallly it can be null
  const [ws, setWs] = useState<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8000");

    socket.onopen = () => {
      console.log("Connected to WebSocket server");
    };

    socket.onmessage = (event: MessageEvent) => {
      console.log("Message from server", event.data);
      setReceivedMessage(event.data);
    };

    socket.onclose = () => {
      console.log("WebSocket closed");
    };

    setWs(socket);

    return () => {
      socket.close();
    };
  }, []);

  const sendMessage = () => {
    if (ws) {
      ws.send(message);
      setMessage("");
    }
  };

  return (
    <div className="App">
      <h1>WebSocket Client</h1>

      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button onClick={sendMessage}>Send Message</button>
      </div>

      <div>
        <h2>Message from Server:</h2>
        <p>{receivedMessage}</p>
      </div>
    </div>
  );
};

export default App;
