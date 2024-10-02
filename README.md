
# WebSocket Message Echo

This project demonstrates the functionality of WebSockets using a full-stack application built with React (frontend) and Node.js (backend), utilizing TypeScript for type safety. The application allows users to send messages through a user-friendly interface, and in response, the server echoes back the message in all uppercase.

## Features

- **Real-time Communication:** Utilizes WebSocket technology to establish a persistent connection between the client and server, allowing for instant message exchange without the need for refreshing the page.
- **TypeScript Integration:** Implemented with TypeScript for improved code quality and maintainability, providing strong typing and early error detection.
- **Responsive Interface:** Designed with React to create a dynamic and interactive user experience where users can easily input their messages.

## How It Works

1. **User Input:** Users can type a message into the input field on the frontend interface.
2. **WebSocket Connection:** The message is sent to the Node.js server through a WebSocket connection.
3. **Server Processing:** Upon receiving the message, the server transforms it to uppercase.
4. **Response:** The server sends the uppercase message back to the client, which is then displayed on the interface.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/skt521/websocket-message-echo.git
   ```
2. Navigate to the project directory:
   ```bash
   cd websocket-message-echo
   ```
3. Install dependencies for both the frontend and backend:
   ```bash
   # For frontend
   cd client
   npm install

   # For backend
   cd server
   npm install
   ```
4. Start the backend server:
   ```bash
   cd server
   npm start
   ```
5. Start the frontend:
   ```bash
   cd client
   npm start
   ```

## Technologies Used

- React
- Node.js
- TypeScript
- WebSockets

## License

This project is licensed under the MIT License.

