class EventEmitter {
    constructor () {
         this.eventObj = {};        
    }

    on(event, callBack) {
        if (!this.eventObj[event]) {
            this.eventObj[event] = [];
        }
        this.eventObj[event].push(callBack)
    }
    
    emit(event, ...args) {
        const events = this.eventObj[event];
        events.forEach(callBack => {
            setTimeout(() => {
                callBack(...args);
            }, 100)
        })
    }
}

const emitter = new EventEmitter();

emitter.on("MyEvent", (times, fName) => {
    console.log("Event has been emitted ", times, '  ', fName);
})

emitter.on("MyEvent", (times) => {
    console.log("Event has been emitted ", times);
})

emitter.emit("MyEvent", 231232, "Sanket");
