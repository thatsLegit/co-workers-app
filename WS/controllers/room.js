const WebSocket = require('ws');

function room(wss) {
    this.wss = wss
}

//Specific case, only triggered from within the server through events
room.prototype.updateUserPosition = function (enteredUser) {
    this.wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({
                type: 'room',
                event: 'userMoved',
                payload: {
                    user: enteredUser
                }
            }));
        }
    });
}


module.exports = room;