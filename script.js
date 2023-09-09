var map = L.map("map").setView([-6.2, 106.816666], 5);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="http://www.example.com/">Example</a>',
    maxNativeZoom: 19,
    maxZoom: 25,
}).addTo(map);

var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);
var drawControl = new L.Control.Draw({
    edit: {
        featureGroup: drawnItems,
    },
});
map.addControl(drawControl);

map.on(L.Draw.Event.CREATED, function (e) {
    var type = e.layerType,
        layer = e.layer;
    if (type === "marker") {
        // Do marker specific actions
    }
    // Do whatever else you need to. (save to db; add to map etc)
    drawnItems.addLayer(layer);
});

map.on("draw:edited", function (e) {
    var layers = e.layers;
    layers.eachLayer(function (layer) {
        //do whatever you want; most likely save back to db
    });
});
