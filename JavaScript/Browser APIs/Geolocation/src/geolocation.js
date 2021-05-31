console.clear();
const responseEl = document.getElementById("response");

let lat;
let lon;

// PRACTICE?
// function getLocation( showLocation, handleError ){}

if ( navigator.geolocation ){

  function success( position ){
    console.log("Success", position );
    console.log( new Date(position.timestamp) );
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    lat = position.coords.latitude;
    lon = position.coords.longitude;

    // displayResponse( position.coords );
    responseEl.textContent = `Success: ${lat}, ${lon}`;
    responseEl.classList.add("success");

    console.log('lat long',lat, lon);
   
    // displayMap( position.coords );
    const map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([lon,lat]),
        zoom: 16
      })
    });

    const layer = new ol.layer.Vector({
      source: new ol.source.Vector({
          features: [
              new ol.Feature({
                  geometry: new ol.geom.Point(
                    ol.proj.fromLonLat([lon, lat]))
              })
          ]
      })
    });
    map.addLayer(layer);

  }
  // response -> GeolocationPositionError object
  function failure( response ){
    console.log("Failed", response );
    responseEl.textContent = response.message;
    responseEl.classList.add("failure");
  }
  navigator.geolocation.getCurrentPosition( success, failure );
  
  // Updated geolocation coords while moving...
  // navigator.geolocation.watchPosition( success, failure );

  // PSEUDO CODE OF HOW getCurrentPosition METHOD WORKS UNDER THE HOOD:
  /*
  function getCurrentPosition( first, second ){
    // It tries to get the geolocation
    if ( "Succeeded to get geolocation" ){
      first( GeolocationPosition );
    } else {
      second( GeolocationPositionError );
    }
  }
  */

}

// new ol.Map({ Object with settings }); --> Create a new map
 // Ops! Undefined due to async getCurrentPosition



  
