let map = L.map('map', {
    layers: MQ.mapLayer(),
    center: [14.625483, 121.124481],
    zoom: 15,
    scrollWheelZoom: false
});
    

    function runDirection(start, end) {
        
        map = L.map('map', {
            layers: MQ.mapLayer(),
            center: [14.625483, 121.124481],
            zoom: 15,
            scrollWheelZoom: false
        });
        
        var dir = MQ.routing.directions();

        dir.route({
            locations: [
                start,
                end
            ]
        });
    

        CustomRouteLayer = MQ.Routing.RouteLayer.extend({
            createStartMarker: (location) => {
                var custom_icon;
                var marker;

                custom_icon = L.icon({
                    iconUrl: 'assets/red.png',
                    iconSize: [20, 29],
                    iconAnchor: [10, 29],
                    popupAnchor: [0, -29]
                });

                marker = L.marker(location.latLng, {icon: custom_icon}).addTo(map);

                return marker;
            },

            createEndMarker: (location) => {
                var custom_icon;
                var marker;

                custom_icon = L.icon({
                    iconUrl: 'assets/blue.png',
                    iconSize: [20, 29],
                    iconAnchor: [10, 29],
                    popupAnchor: [0, -29]
                });

                marker = L.marker(location.latLng, {icon: custom_icon}).addTo(map);

                return marker;
            }
        });
        
        map.addLayer(new CustomRouteLayer({
            directions: dir,
            fitBounds: true
        })); 
    }


function submitForm(event) {
    event.preventDefault();

    map.remove();

    start = document.getElementById("start").value;
    end = document.getElementById("destination").value;

    runDirection(start, end);

    document.getElementById("form").reset();
}

const form = document.getElementById('form');

form.addEventListener('submit', submitForm);