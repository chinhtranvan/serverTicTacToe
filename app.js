const { Server } = require("socket.io");
const express = require('express')
const cors = require("cors");
const app = express();
const http = require("https");

app.use(cors());
const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: 'https://master.d3ctzvy8y5el11.amplifyapp.com/2players/Online',
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

app.get("/", (req, res) => {
  res.send("Hello World!");
});

httpServer.listen(process.env.PORT || 3001, () => {
  console.log('app is running');
});


