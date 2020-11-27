//initializes app
const app = require ('express')();
const http = require ('http').createServer(app);
const io = require('socket.io') (http);

//defined route handler using '/'. used GET as endpoint to connect to html
app.get('/', (req, res) => {
 res.sendFile(__dirname + '/index.html'); //calling res.send and passing string of HTML. refactored route handler
});

//initializing instence of socket.io and passint http object and listen to connection event for incoming sockets.
io.on('connection', (socket) => {
    console.log('a user connected');
    //firing a new disconnect event/function
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    });

//server listening on port 3000
http.listen(3000, () => {
    console.log('listening on *:3000');
});