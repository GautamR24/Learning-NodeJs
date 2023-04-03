const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

//creating a new event emitter

const myEmitter = new MyEmitter();

myEmitter.on('event', () => {
  console.log('an event occurred!');
  //this will run after all the work is done
  setTimeout(() => {
    console.log("this is from the settimeout");
  }, 3000);
});

myEmitter.emit('event');