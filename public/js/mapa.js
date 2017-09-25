function mapa() {
    var zona = {lat: 19.5045672, lng: -99.1469098}

    var opciones = {
        center: zona,
        zoom: 15,
    };

    var mapa = new google.maps.Map(document.getElementById("mapa"), opciones);
    var marker = new google.maps.Marker({
        position: zona,
        map: mapa
    });
}