const express = require('express');
const app = express();
const port = 3001;
const http = require('http');
const cors = require('cors');
const {Server} = require('socket.io');

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: 'http://127.0.0.1:5173',
        methods: ['GET', 'POST']
    },
});

io.on('connection', (socket) => {
    console.log(socket.id);
});

server.listen(port, () => {
    console.log("HELLO EXPRESS");
});