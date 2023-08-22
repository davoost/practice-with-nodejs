const EventEmitter = require('events')

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    log(message) { //when a function is inside a class it is a method
        //send an HTTP request
        console.log(message);
        // Raise an event
        this.emit('messageLogged', {id: 1, url: 'http://'});
    }
}



module.exports = Logger;




