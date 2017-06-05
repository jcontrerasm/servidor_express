/*
  Cookies
*/

// Obtengo todas las cookies
let cookiesDefault = document.cookie;
// Separo las cookies
let arrayCookies   = cookiesDefault.split("; ");
// Array que almacenara el valor de cada cookie
let valuesCookies  = [];

if( navigator.cookieEnabled ) {

  let extractValuesCookies = function(){
    // Obtengo el valor de las cookies
    arrayCookies.forEach(function(value , index , arrayCookies){
      let pos = value.indexOf("=");
      if(pos != -1){
        valuesCookies.push(value.substr(pos+1));
      }
    });

  }

}else {
  console.log("El uso de cookies está desactivado");
}

/*
  Jquery
*/

let objElements = [
  {
    id: 23546,
    nombre: "juan"
  },
  {
    id: 74346,
    nombre: "carlos"
  },
  {
    id: 79455,
    nombre: "erika"
  }
];
  
let arrayElements    = objElements.map((element)=>element.id);
let newArrayElements = []; 

$(".js_elements li").each(function(index, element) {

  let idElement = parseInt($(element).attr("id"));
    
  let searchElement = arrayElements.indexOf(idElement);

  if(searchElement == -1){
    newArrayElements.push(idElement);
  }

});

console.log(newArrayElements);