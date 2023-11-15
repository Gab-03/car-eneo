let map = L.map('map', {
    layers: MQ.mapLayer(),
    center: [14.625483, 121.124481],
    zoom: 15,
    scrollWheelZoom: false
});

function runDirection(start, stops, end) {
    
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
            ...stops,
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

function addStopInputField() {
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.placeholder = 'Add stop';
    inputField.classList.add("stops", "input");
    
    document.getElementById("stops").appendChild(inputField);
}
      
function submitForm(event) {
    event.preventDefault();

    map.remove();

    const stops = []

    start = "Katipunan Ave"
    inputFields = document.querySelectorAll('#stops input');
    inputFields.forEach((inputField) => {
        stops.push(inputField.value);
    });
    end = document.getElementById("destination").value;

    console.log(start)
    console.log(stops)
    console.log(end)

    runDirection(start, stops, end);

    document.getElementById("form").reset();
}

function acceptBook(event) {
    event.preventDefault();

    map.remove();

    const stops = []

    start = "Katipunan Ave"
    end = document.getElementById("drop-off").textContent;


    runDirection(start, stops, end);

}

const modalForm = document.getElementById("modal-form");
modalForm.addEventListener("submit", acceptBook);

const startInput = document.createElement("input");
startInput.setAttribute("type", "text");
startInput.setAttribute("name", "start");
startInput.setAttribute("class", "input");
startInput.setAttribute("id", "start");
startInput.setAttribute("placeholder", "Ateneo de Manila University")
startInput.setAttribute("disabled", true)

const stops = document.createElement("div");
stops.setAttribute("id", "stops")

const destinationInput = document.createElement("input");
destinationInput.setAttribute("type", "text");
destinationInput.setAttribute("name", "end");
destinationInput.setAttribute("class", "input");
destinationInput.setAttribute("id", "destination");
destinationInput.setAttribute("placeholder", "Choose destination");

const addStopButton = document.createElement('button');
addStopButton.type = 'button';
addStopButton.id = 'addStop';
addStopButton.className = 'button-booking'
addStopButton.textContent = 'Add Stop';

const bookDriverButton = document.createElement('button');
bookDriverButton.type = 'submit';
bookDriverButton.id = 'submit-book';
bookDriverButton.style.display = 'block';
bookDriverButton.textContent = 'Book a driver';

const form = document.getElementById('form');
form.appendChild(startInput)
form.appendChild(stops)
form.appendChild(destinationInput)
form.appendChild(addStopButton)
form.appendChild(bookDriverButton)

const stopButton = document.getElementById("addStop")
stopButton.addEventListener("click", () => {
    addStopInputField()
});

form.addEventListener('submit', submitForm);