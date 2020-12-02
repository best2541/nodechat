const express =require('express')
const app = express();
const socketio = require('socket.io')

app.set("view engine","ejs")
app.use(express.static("public"))

app.get("/",(req,res) =>{
    res.render("index");
})

const server = app.listen(process.env.PORT ||3000, () =>{
    console.log("server")
})

const io = socketio(server);

io.on("connection", socket =>{
    console.log("New user")
})