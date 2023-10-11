let express = require("express");
let app = express();
let dbConnect = require("./dbConnect");

dbConnect.connectMysql()

let http = require('http').createServer(app);
let io = require('socket.io')(http);


var port = process.env.PORT || 8080;
app.use(express.json());
app.use(express.static(__dirname + '/public'));
let userRoute = require('./routes/userRoute')
app.use('/api/users',userRoute)

let postRoute = require('./routes/postRoute')
app.use('/api/posts',postRoute)

let commentRoute = require('./routes/commentRoute')
app.use('/api/comments',commentRoute)

let weatherRoute = require('./routes/weatherRoute')
app.use('/api/weather',weatherRoute)


app.get("/test", function (request, response) {
  var user_name = request.query.user_name;
  response.end("Hello " + user_name + "!");
});


//socket test
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  setInterval(()=>{
    socket.emit('number', parseInt(Math.random()*10));
  }, 1000);

});


http.listen(port,()=>{
  console.log("Listening on port ", port);
});

