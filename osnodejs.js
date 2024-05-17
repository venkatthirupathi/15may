const os=require('os')




console.log("os architecture",os.arch())
console.log("freememory",os.freemem())
console.log("totalmem",os.totalmem())
console.log("list of network interfaces",os.networkInterfaces())
console.log("os default directory for temp files",os.tmpdir())