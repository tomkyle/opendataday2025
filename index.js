// https://basemap.de/data/produkte/web_vektor/anwendungsbeispiele/baudenkmale_brandenburg.html

const map = new maplibregl.Map({
    container: 'map',
    style: 'https://sgx.geodatenzentrum.de/gdz_basemapde_vektor/styles/bm_web_gry.json',
    center: [9.4333264, 54.7833021],
//    center: [9.6655633813, 53.7559512825],
    zoom: 15,
    pitch: 60,
    bearing: -17.6,
    canvasContextAttributes: {antialias: true},
});

map.on('load', () => {
    // Insert the layer beneath any symbol layer.
    const layers = map.getStyle().layers;

/*    let labelLayerId;
    for (let i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
            labelLayerId = layers[i].id;
            break;
        }
    }*/

/*    map.addSource('openmaptiles', {
        url: `https://api.maptiler.com/tiles/v3/tiles.json?key=${MAPTILER_KEY}`,
        type: 'vector',
    });*/
/*    map.addSource('flensburgtiles', {
        tiles: [`https://tiles.oklabflensburg.de/fosm/{z}/{x}/{y}.png`],
        type: 'raster',
        attribution: 'Dingens',
    });*/
        
    // Add a layer showing the state polygons.
    map.addLayer({
        'id': 'Kulturdenkmale',
        'type': "fill-extrusion",
        'source': {
            'type': 'geojson',
//            'data': 'https://basemap.de/data/produkte/web_vektor/anwendungsbeispiele/geojson/baudenkmale_brandenburg.geojson'
//            'data': 'https://tursics.github.io/opendataday2025/stadt-flensburg-denkmalschutz.geojson'
//            'data': 'https://tursics.github.io/opendataday2025/denkmalliste_geometrien.geojson'
            // https://opendata.schleswig-holstein.de/dataset/b-plan-b-90
//            'data': 'https://opendata.schleswig-holstein.de/data/elmshorn/Bebauungsplaene/B%2090/Elm_BP_090.json'
            // https://opendata.schleswig-holstein.de/dataset/geodaten-denkmalliste-sh-2025-03-01
//            'data': 'https://opendata.schleswig-holstein.de/dataset/2d2e094b-582a-4dcb-a217-875ad25f280b/resource/2d689e75-fbed-41fe-960c-fa11ddb4d837/download/geodaten-denkmalliste-sh.geojson'
            'data': 'https://raw.githubusercontent.com/tursics/opendataday2025/refs/heads/main/denkmalliste-flensburg.geojson'
        },
        'paint': {
        'fill-extrusion-color': 'rgba(215, 59, 59, 1)',
        'fill-extrusion-opacity': 0.8,
        'fill-extrusion-height': 20}
    });

/*    map.addLayer(
        {
            'id': '3d-buildings',
//            'source': 'openmaptiles',
//            'source': 'flensburgtiles',
            'source-layer': 'building',
            'type': 'fill-extrusion',
            'minzoom': 15,
            'filter': ['!=', ['get', 'hide_3d'], true],
            'paint': {
                'fill-extrusion-color': [
                    'interpolate',
                    ['linear'],
                    ['get', 'render_height'], 0, 'lightgray', 200, 'royalblue', 400, 'lightblue'
                ],
                'fill-extrusion-height': [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    15,
                    0,
                    16,
                    ['get', 'render_height']
                ],
                'fill-extrusion-base': ['case',
                    ['>=', ['get', 'zoom'], 16],
                    ['get', 'render_min_height'], 0
                ]
            }
        },
        labelLayerId
    );*/
});

// 54.7833021, 9.4333264

// https://tiles.oklabflensburg.de/fosm/{z}/{x}/{y}.png

// https://nominatim.oklabflensburg.de/search?q=norderstra%C3%9Fe%2049,%20flensburg
// https://nominatim.oklabflensburg.de/search?q=norderstra%C3%9Fe%2049,%20flensburg&format=geocodejson
// https://nominatim.oklabflensburg.de/search?q=norderstra%C3%9Fe%2049,%20flensburg&format=geocodejson&addressdetails=1

// https://opendata.schleswig-holstein.de/dataset/cce3d31f-1a8a-4840-8fd7-986face6f229/resource/1aff4674-b6e7-4608-bec5-f81b3656eaf0
// https://github.com/oklabflensburg/open-monuments-map/blob/main/data/stadt-flensburg-denkmalschutz.geojson
