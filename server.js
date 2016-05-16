var ws = require("nodejs-websocket")

var clients = []

var server = ws.createServer(function(conn){
    clients.push(conn);
    console.log(clients)
    console.log("new connection");

    conn.on("text", function(receivedMessage){

        console.log("received " +receivedMessage)
        clients.forEach(function(client){
            client.sendText(receivedMessage)
        })
    })
    conn.on("close", function(code, reason){
        clients.splice(clients.indexOf(conn), 1);

        console.log("connection closed for "+reason)
    })
}).listen(8001)

