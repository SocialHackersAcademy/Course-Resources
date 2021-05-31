const URL = "https://restcountries.eu/rest/v2/name/nigeria";
const xhr = new XMLHttpRequest();
xhr.open( "GET", URL ); // Arguments order does matter!!!
xhr.addEventListener("load",()=>{
  // alert("Loaded...");
  const data = JSON.parse(xhr.responseText);
  console.log(data[0].name, data[0].population);
  document.body.innerHTML = `
    <p>${data[0].name}</p>
    <p>${data[0].population}</p>
  `
});
xhr.addEventListener("error",()=>{
  document.body.innerHTML = "Oops!";
})
xhr.send();

// Fetch API: Async HTTP Request (similar to XHR)
// fetch() is Promise-based function
fetch("https://restcountries.eu/rest/v2/name/greece")
.then(function(response){
  console.log(response, response.status); // 200, 404
  // text() is also async
  response.text().then(function(text){
    const data = JSON.parse(text);
    console.log( data[0].name, data[0].population);
  });
  return 42;
}).then(function(arg){
  console.log("arg:", arg);
  return arg * 10;
}).then(function(arg){
  console.log("arg #2:", arg);
});

// fetch( URL, callback )
// ->
// fetch( URL ).then( callback ).then( callback );
fetch("https://restcountries.eu/rest/v2/name/italy")
.then(function(response){

  // Check the really useful: response.json();
  return response.text(); // <-- text() is also async Promise-based

}).then(function(text){

  const data = JSON.parse(text);
  // displayResponse( data );
  // displayMap( data );
  console.log(data[0].name, data[0].population);

}).catch(function(error){
  console.log( "Error:", error );
});

// Suggested Syntax:
// fetch( URL )
// .then( convertToText )
// .then( displayData )
// .catch( handleError );

// PRACTICE:
// 1) Create an input where the user enters the name of a country
// 2) Once the user hits a button, a Fetch requests the restcountries API for that country
// 3) When the request gets back, convert to JSON, find lat and long and display a map

// console.log(1);
// fetch( URL ).then( cb ).then( cb ); // <-- Async
// console.log(2);

// 1
// 2
// fetch,then,then will complete here