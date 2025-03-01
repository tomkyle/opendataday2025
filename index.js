// Based on this sample
// https://basemap.de/data/produkte/web_vektor/anwendungsbeispiele/baudenkmale_brandenburg.html

const map = new maplibregl.Map({
    container: 'map',
    style: 'https://sgx.geodatenzentrum.de/gdz_basemapde_vektor/styles/bm_web_gry.json',
    center: [9.4333264, 54.7833021],
    zoom: 15,
    pitch: 60,
    bearing: -17.6,
    canvasContextAttributes: {antialias: true},
});

map.on('load', () => {
    map.addLayer({
        'id': 'Kulturdenkmale',
        'type': 'fill-extrusion',
        'source': {
            'type': 'geojson',
            'data': 'https://raw.githubusercontent.com/tursics/opendataday2025/refs/heads/main/denkmalliste-flensburg.geojson'
        },
        'paint': {
        'fill-extrusion-color': 'rgba(215, 59, 59, 1)',
        'fill-extrusion-opacity': 0.8,
        'fill-extrusion-height': 20}
    });
});

// https://nominatim.oklabflensburg.de/search?q=norderstra%C3%9Fe%2049,%20flensburg
// https://nominatim.oklabflensburg.de/search?q=norderstra%C3%9Fe%2049,%20flensburg&format=geocodejson
// https://nominatim.oklabflensburg.de/search?q=norderstra%C3%9Fe%2049,%20flensburg&format=geocodejson&addressdetails=1
