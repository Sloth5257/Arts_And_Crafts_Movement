const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  //res.send('<h1>Hello world</h1>');
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    //console.log('a user connected');
    socket.on('chat message', (msg) => { io.emit('chat message', msg); });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});

/*
let express = require('express'); //1.載入express模組
let app = express(); // 2.使用express
app.use(express.urlencoded({ extended: false }))
app.get('/', function (req, res) 
{ 
    //res.send('Hello') 
    res.send('<form action="/answer" method="POST"><p>猜猜看，我喜歡什麼顏色的衣服？</p><input name="preferColor" autocomplete="off"><button>送出</button></form>')
}) // 5.首頁
app.post('/answer', function (req, res) 
{
    if (req.body.preferColor == "紅色") 
    {
      res.send("答對了，你真暸解我")
    } 
    else 
    {
      res.send("對不起，不是這個答案")
    }
    res.send("感謝送出表單")
})
let port = 3000; //3.設定port位置
app.listen(port); // 4.監聽 port

console.log('Server running at localhost:'+port);
*/