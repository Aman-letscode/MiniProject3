const dotenv = require('dotenv')
dotenv.config()


const express  = require('express')
const app = express()
const http = require('http').Server(app);

//cors
const cors  = require('cors')
const bodyParser  = require('body-parser')
const socket = require('socket.io')
// const ipfs  = require('ipfs-core')

//user-defined
const routes = require('./routes/routes')
const connect = require('./config/dbconnect')

//connection port
const port = process.env.PORT || 3000;

//socket connection

app.set('Content-type','application/json')
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(__dirname + '/src'));
// connect()

connect(process.env.MONGO_DB_URL);
// io.on("connection", socket =>{
//     console.log(socket.id);
//     socket.on('disconnect',d =>{
//         console.log("disconnected");
//     })
//     socket.on('message',msg=>{
//         console.log("msg");
//     })
//     socket.emit('server',"server");
// })
app.use('/api/',routes);
const io = socket(http);

// require("./socket/socket")(io)

io.on("connection", socket =>{
    console.log(socket.id);
    socket.on('chatMessage',msg=>{
        msg1.push(msg);
        io.emit('chatMessage',msg1[0]);
    })
    // socket.on('send-msg',obj=>{
    //     // console.log(msg);
    //     // me
    //     // const evidence = 
    //     const messages = message.findById(obj._id);
        
    //     socket.emit('recieve',)
    // })
})
http.listen(port,()=>{
    console.log("Listening to ", port);
})

// const io = require('socket.io')(http);
