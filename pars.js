/*let requestURL = 'https://stores-api.zakaz.ua/stores/', request = new XMLHttpRequest(), arr = [], arrOne = [], arrTwo = [];
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    let shop = request.response;
    for (let i = 0; i < shop.length; i++) {
        let name = shop[i].name.split(' ')[0];
        if(name === 'METRO'){
            let requestN = new XMLHttpRequest(), requestUrlID = 'https://stores-api.zakaz.ua/stores/' + (shop[i].id) + '/products/by-parent-category/';
            requestN.open('GET', requestUrlID);
            requestN.responseType = 'json'; requestN.send();
            requestN.onload = function () {
                let mag = requestN.response;
                arr[i] = {city: shop[i].city,  magazineItems: ''};
                arr[i].magazineItems = JSON.stringify(mag);
                console.log(arr);
            }
        }
    }
}*/

let arrStr = [], str = '', strS = '';

let requestN = new XMLHttpRequest(), requestUrlID = 'json/metro/Odessa.json' /*+ (shop[i].id) + '/products/by-parent-category/'*/;
requestN.open('GET', requestUrlID); requestN.send();
requestN.responseType = 'json';
requestN.onload = function () {
    let mag = JSON.stringify(requestN.response);
    str = JSON.parse(mag);
    str.map(title => console.log(title.title));
}

/*let request = new XMLHttpRequest(), requestUrl = 'json/metro/chernov.json';
request.open('GET', requestUrl);
request.responseType = 'json'; request.send();
request.onload = function () {
    let mag = request.response;
    //for (let i = 0; i < mag.length; i++) {
    //console.log(mag[i].title);
    //arrStr.push(mag[i].title);
    // }
    //console.log(typeof mag[0].title)

    //console.log(requestN.readyState)
    strS = mag[0].title;
    console.log("str = " + strS);
}*/
//downloadAsFile(JSON.stringify(mag), shop[i].name);
function downloadAsFile(data, name) {
    let a = document.createElement("a");
    let file = new Blob([data], {type: 'application/json'});
    a.href = URL.createObjectURL(file);
    a.download = name + ".json";
    a.click();
}

// json/metro/Odessa.json
/*
var url = 'http://api.soundcloud.com/resolve.json?'+resource+'&'+CLIENT_ID;
var xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.onload = function(){
    var data = JSON.parse(xhr.responseText);
    console.log(data.permalink_url);
};
xhr.send();

var metadata = {
    id: val,
    title: title,
    url: posturl,
    track: data.permalink_url
};

xhr.onload = function () {
    // This will execute second
    doStuffWithData(JSON.parse(xhr.responseText));
}
// This will execute first
xhr.send();
var anything = anythingElse;*/