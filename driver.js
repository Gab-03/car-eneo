let map = L.map('map', {
    layers: MQ.mapLayer(),
    center: [14.6399, 121.0785],
    zoom: 15,
    scrollWheelZoom: false
});

function runDirection(start, stops, end) {
    
    map = L.map('map', {
        layers: MQ.mapLayer(),
        center: [14.6399, 121.0785],
        zoom: 15,
        scrollWheelZoom: false
    });
    
    var dir = MQ.routing.directions();

    dir.route({
        locations: [
            start,
            ...stops,
            end
        ]
    });

    CustomRouteLayer = MQ.Routing.RouteLayer.extend({
        createStartMarker: (location) => {
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
        },

        createEndMarker: (location) => {
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
        }
    });
    
    map.addLayer(new CustomRouteLayer({
        directions: dir,
        fitBounds: true
    })); 
}

function addStopInputField() {
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.placeholder = 'Add stop';
    inputField.classList.add("stops", "input");
    
    document.getElementById("stops").appendChild(inputField);
}
      
// function submitForm(event) {
//     event.preventDefault();

//     map.remove();

//     const stops = []

//     start = "Katipunan Ave"
//     // inputFields = document.querySelectorAll('#stops input');
//     // inputFields.forEach((inputField) => {
//     //     stops.push(inputField.value);
//     // });
//     // const dest = document.getElementById("destination");
//     // dest.textContent = document.getElementById("destination").value
//     end = document.getElementById("destination").value

//     // let confirmBookButton = document.getElementById("confirm-book")
//     // let bookDriverButton = document.getElementById("submit-book")
//     // confirmBookButton.style.display = "none"
//     // bookDriverButton.style.display = "block"

//     // let fare = document.getElementById("fare")
//     // fare.style.display = "block"
//     runDirection(start, stops, end);
    
//     // document.getElementById("form").reset()
// }

function acceptBook(event) {
    event.preventDefault();

    map.remove();

    const stops = []

    start = "Katipunan Ave"
    end = document.getElementById("drop-off").textContent;
    console.log(end)

    runDirection(start, stops, end);
}

const modalForm = document.getElementById("modal-form");
modalForm.addEventListener("submit", acceptBook);