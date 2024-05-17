const fs=require('fs')
// var dataread=fs.readFileSync("input.txt","utf8")
// console.log(dataread)
// console.log("data")
// fs.writeFileSync("output.txt",dataread)
fs.readFile("input.txt","utf8",function(err,dataread)
{
    if(err)
        {
            console.log(err)
        }
        // console.log("filecontents",dataread)
        else{
fs.writeFile("output.txt",dataread,function(err){
    if(err)
        {
            console.error("error")
        }
});
        }
});
fs.mkdir('mydir',function(){
    fs.readFile("input.txt","utf8",function(err,dataread){
        fs.writeFile(`./mydir/writeMe.txt`,dataread,function(err){
            if(err)
                {
                    console.log("error")
                }
        })    })
})
fs.mkdir("servernodejs",function(){
    
})