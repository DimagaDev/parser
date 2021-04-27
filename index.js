const http = require("http");
const json1 = require('./json/metro/Odessa.json');
const json2 = require('./json/metro/terem.json');

http.createServer(function(request,response){
    let count = 0;
    for (let i = 0; i < json1.length; i++) {
        for (let j = 0; j < json2.length; j++) {
            if(json1[i].title === json2[j].title) {
                console.log(json1[i].title + " === " + json2[j].title);
                count++;
            }
        }
    }
    response.end("Count = " + count);
}).listen(3000, "127.0.0.1",function(){
    console.log("прослушивание запросов на порту 3000");
});