var events=require('events')
let ee=new events.EventEmitter()

ee.on('stream',()=>console.log("hi"))

var s=()=>console.log("it is fun1")
ee.on('hi',s)

ee.emit('stream')
ee.emit('hi',"bye")