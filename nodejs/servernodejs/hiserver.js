var  http=require('http')
var server=http.createServer(function(req,res){
    res.writeHead("helloworld")
    res.end();
})
server.listen(2000)
console.log("server successfully created")