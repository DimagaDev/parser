const http = require("http");
const fs = require("fs");

const axios = require("axios");
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
axios
  .get(
    "https://stores-api.zakaz.ua/stores/48280051/categories/bakery-ekomarket/products/"
  )
  .then((res) => {
    //console.log(res.data);
    res.data.results.forEach((item) => {
      console.log(item);
    });
    //result = res.data;
    /*res.data.forEach((item) => {
      //count += item.count
      console.log("Категория 1lvl - " + item.title);
      //console.log(item)
      item.children.forEach((i) => {
        if (i.children.length) {
          console.log("Категория 2lvl - " + i.title);
          console.log("Категория 3lvl:");
          i.children.forEach((chi) => {
            console.log(chi);
          });
        }
      });
    });*/
    //console.log('Count: ' + count)
    //res.data.results.map((item) => result.push(item));
    result.push(res.data);
    fs.writeFile(
      "productOfCategory/EkoMarketZhytomyrBakeryProducts.json",
      JSON.stringify(result, null, "\t"),
      "utf8",
      function (err) {
        if (err) return console.log(err);
        console.log("The file was saved!");
      }
    );
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

// rozetka https://xl-main-api.rozetka.com.ua/v3/sections/get?front-type=xl&country=UA&lang=ru&sectionMoreLast=goods_id=138393159
// https://common-api.rozetka.com.ua/v2/fat-menu/full?front-type=xl&country=UA&lang=ru&r=0.7181789651983239
/* https://common-api.rozetka.com.ua/v2/goods/get-price/?country=UA&lang=ru&ids=82833459,249031633,82816893,245162575,245162533,267878356,255900031,245161951,245162563,255924581,235378219,255605046,186893988,12146555,255613361,149002233,180030320,245162485,138238368,238811347,257289436,245161999,149108808,245162293,245162245,286171363,245162527,260920656,245162365,245162467&r=0.12964513669776712&with_show_in_site=1&lng=ru*/
// https://api-analytics.rozetka.com.ua/bulk
/*axios.get('https://api-analytics.rozetka.com.ua/bulk').then(res => {
	console.log(res)

	/!*console.log(res.data.data)
		res.data.data.sectionMoreLast.goods.forEach(item => {
			console.log(item)
			count++
		})*!/

	//console.log(res.data.data['2416'])
	//result = res.data;
	/!*for (const resKey in res.data.data) {
			console.log(res.data.data[resKey].title)
			count++
		}*!/
	console.log('Count: ' + count)
	/!*fs.writeFile("CategoryFirstAndTwoLvl/EkoMarket/categoryEkoMarketKievZakrevs'koho.json", JSON.stringify(result, null, '\t'), 'utf8', function (err) {
                if (err) return console.log(err);
                console.log("The file was saved!");
        });*!/
	//console.log("result");
	//console.log(result);
})*/

// утконос https://www.utkonos.ru/api/v1/landing/getFeatureByUsingId
// https://www.utkonos.ru/api/v1/banner/search
/*axios.get('https://www.utkonos.ru/api/v1/banner/search').then(res => {
	console.log(res)

	/!*console.log(res.data.data)
		res.data.data.sectionMoreLast.goods.forEach(item => {
			console.log(item)
			count++
		})*!/

	//console.log(res.data.data['2416'])
	//result = res.data;
	/!*for (const resKey in res.data.data) {
			console.log(res.data.data[resKey].title)
			count++
		}*!/
	console.log('Count: ' + count)
	/!*fs.writeFile("CategoryFirstAndTwoLvl/EkoMarket/categoryEkoMarketKievZakrevs'koho.json", JSON.stringify(result, null, '\t'), 'utf8', function (err) {
								if (err) return console.log(err);
								console.log("The file was saved!");
				});*!/
	//console.log("result");
	//console.log(result);
})*/

// instacart https://api.segment.io/v1/m
/* https://www.instacart.com/graphql?operationName=CollectionHeaderQuery&variables=%7B%22retailerInventorySessionToken%22%3A%22v1.20eb419.254558136-94105-03778x112239-1-1487-88059-1%22%2C%22slug%22%3A%22d31568-pantry%22%2C%22pageViewId%22%3A%22c44ea05c-b475-4374-aa99-e2ac4b76776c%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%2263805f09058ef1efda4479847f5f34b983baf1c31335b356ef36860f700b5949%22%7D%7D*/
/* https://www.instacart.com/graphql?operationName=NavCollections&variables=%7B%22retailerInventorySessionToken%22%3A%22v1.20eb419.254558136-94105-03778x112239-1-1487-88059-1%22%2C%22slug%22%3A%22d31568-pantry%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%2208c03598a10eecf01bbed623c07586dd64ce204d58ecab729bc4ccc710b3fd1b%22%7D%7D*/
/* https://www.instacart.com/graphql?operationName=AisleNavCollections&variables=%7B%22retailerInventorySessionToken%22%3A%22v1.20eb419.254558136-94105-03778x112239-1-1487-88059-1%22%2C%22slug%22%3A%22d31568-pantry%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%228e131712508d151f927be8f8ed6f11bc7d41931e81e5091ec5067d3c17b2ed04%22%7D%7D*/
/*axios
	.get(
		'https://www.instacart.com/graphql?operationName=AisleNavCollections&variables=%7B%22retailerInventorySessionToken%22%3A%22v1.20eb419.254558136-94105-03778x112239-1-1487-88059-1%22%2C%22slug%22%3A%22d31568-pantry%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%228e131712508d151f927be8f8ed6f11bc7d41931e81e5091ec5067d3c17b2ed04%22%7D%7D'
	)
	.then(res => {
		console.log(res)

		/!*console.log(res.data.data)
		res.data.data.sectionMoreLast.goods.forEach(item => {
			console.log(item)
			count++
		})*!/

		//console.log(res.data.data['2416'])
		//result = res.data;
		/!*for (const resKey in res.data.data) {
			console.log(res.data.data[resKey].title)
			count++
		}*!/
		console.log('Count: ' + count)
		/!*fs.writeFile("CategoryFirstAndTwoLvl/EkoMarket/categoryEkoMarketKievZakrevs'koho.json", JSON.stringify(result, null, '\t'), 'utf8', function (err) {
								if (err) return console.log(err);
								console.log("The file was saved!");
				});*!/
		//console.log("result");
		//console.log(result);
	})*/
