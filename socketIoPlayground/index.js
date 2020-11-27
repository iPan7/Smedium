//initializes app
const app = require ('express')();
const http = require ('http').createServer(app);

//defined route handler using '/'
app.get('/', (req, res) => {
 res.sendFile(__dirname + '/index.html') //calling res.send and passing string of HTML. refactored route handler
});

//server listening on port 3000
http.listen(3000, () => {
    console.log('listening on *:3000');
});