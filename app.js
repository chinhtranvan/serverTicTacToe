const { Server } = require("socket.io");
const express = require('express')
const cors = require("cors");
const app = express();
const http = require("http");

app.use(cors());
const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:3000/2players/Online',
    methods: ["GET", "POST"],
    credentials: true,
  },
});
io.on("connection", (socket) => {
  console.log('socket connected')
  socket.on('next turn',(res)=>{
    console.log('doi ban vua danh')
    console.log(res)
    socket.broadcast.emit('next turn',res)
  })
})
httpServer.listen(3001, () => {
  console.log('app is running');
});


