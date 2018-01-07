/*
***********  PROJECT:          altcoinCheck
***********  FILENAME:         "retrieveAPI.js"          
***********  LANGUAGE:         javascript               
***********  AUTHOR:           Stephen Casica
***********  DESCRIPTION:      sends current info of currencies to index.html
*/
     


/*
FUNCTION:        getInfo(tag,type)
DESCRIPTION:     calls API to retrieve info about currency
@PARAM:          tag(type:string): the id of the currency in the html file
@PARAM:          type(type:string): the name of the currency as used by the api
*/
function getInfo(tag,type) {

     //create the address to pull the currency info from (syntax is according to api documentation)
     var addr = "https://api.coinmarketcap.com/v1/ticker/" + type + "/";
     var request = new XMLHttpRequest();

     request.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
               var response = JSON.parse(this.responseText);
               //place currency's rate in the html id denoted by parameter 'tag'
               document.getElementById(tag).innerHTML = "$" + response[0].price_usd;
          };
     };
     request.open("GET", addr, true);
     request.send();
}

//call the function for each desired currency (**ordering is irrelevant)
getInfo("btc", "bitcoin");
getInfo("eth", "ethereum");
getInfo("bch", "bitcoin-cash");
getInfo("xrp", "ripple");
getInfo("ltc", "litecoin");
getInfo("dash", "dash");
getInfo("xmr", "monero");
getInfo("etc", "ethereum-classic");
getInfo("xlm", "stellar");
