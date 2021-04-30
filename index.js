const http = require("http");
const fs = require('fs');
const json1 = require('./json/metro/Odessa.json');
const json2 = require('./json/metro/terem.json');

const axios = require('axios');
var result = [];
var count = 0;
// https://stores-api.zakaz.ua/stores/48215637/products/by-parent-category/
/*axios.get("https://stores-api.zakaz.ua/stores/48215612/categories/easter-assortment-metro/")
    .then(res => {console.log(res); return res;})
    .then(res => res.data.forEach(element => {
        result[element] = true
    })).then(() => console.log(result));*/

/*
https://stores-api.zakaz.ua/stores/48215612/categories/bakery-metro/ информация о категории и количестве товаров
https://stores-api.zakaz.ua/stores/48215612/categories/bakery-metro/products/ продукты по категории
*/
//axios.get("https://stores-api.zakaz.ua/stores/48215612/categories/bakery-metro/products/") // stores/48215612/categories/
axios.get("https://stores-api.zakaz.ua/stores/48280214/categories/") // stores/48215612/categories/ ! 48215610/categories/bakery-CategoryFirstAndTwoLvl/products/
    .then(res => { //console.log(res.data);
        //result = res.data;
        res.data.forEach(item => {
            console.log(item.count);
            count += item.count;
            //console.log(item.children);
            /*item.children.forEach( i => {
                console.log(i);
            });*/
            //result.push(item);
        });
        console.log("Count: " + count);
        /*fs.writeFile("CategoryFirstAndTwoLvl/EkoMarket/categoryEkoMarketKievZakrevs'koho.json", JSON.stringify(result, null, '\t'), 'utf8', function (err) {
                if (err) return console.log(err);
                console.log("The file was saved!");
        });*/
        //console.log("result");
        //console.log(result);
    });



//fs.writeFileSync('bakery-CategoryFirstAndTwoLvl.json', JSON.stringify(result));
//console.log(result);
/*fs.writeFile("bakery-CategoryFirstAndTwoLvl.json", JSON.stringify(result), function (err) {
    if (err) throw err;
    console.log('complete');
});*/

        /*res.data.forEach(item => {
            console.log(item);
            /!*if(item.name.split(' ')[0] === 'METRO') {
                console.log(item)
            }*!/
        })*/
        /*fs.writeFile("input.json", JSON.stringify(res.data), function (err) {
            if (err) throw err;
            console.log('complete');
        });*/
        //return res;
    //})
    //.then(res => res.data.forEach(element => {

    //})).then(() => console.log(result));


/*http.createServer(function(request,response){
    /!*let count = 0;
    for (let i = 0; i < json1.length; i++) {
        for (let j = 0; j < json2.length; j++) {
            if(json1[i].title === json2[j].title) {
                console.log(json1[i].title + " === " + json2[j].title);
                count++;
            }
        }
    }
    response.end("Count = " + count);*!/
    // https://stores-api.zakaz.ua/stores/id/categories/

    const fetch = require('node-fetch');
    let url = "https://stores-api.zakaz.ua/stores/48215637/products/by-parent-category/";
    let settings = { method: "Get" };

    fetch(url, settings)
        .then(res => res.json())
        .then((res) => {
            // do something with JSON
            console.log(res);
        });

}).listen(3000, "127.0.0.1",function(){
    console.log("прослушивание запросов на порту 3000");
});*/

/*
function checkIfPhishing(urlToPrint){
    var file = fs.createWriteStream("metroCategory.json");
    var request = http.get(urlToPrint, function(response) {
        response.on("finish",function(){
            console.log( fs.readFileSync("metroCategory.json",{encoding:"utf8"}));
        }).pipe(file);
    });
}*/
