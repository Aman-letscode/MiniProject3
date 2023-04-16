// const message = require('../models/message')
 
const msg1 = []
module.exports = (io) =>{
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
}