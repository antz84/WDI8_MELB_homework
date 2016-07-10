
var initialise = {
    center: new google.maps.LatLng(-37.816279,144.964246),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true,

};


new google.maps.Map(document.getElementById('map'), initialise);
