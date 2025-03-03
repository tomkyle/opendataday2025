// Based on
//
//   - Thomas Tursics’ OpenDataDay25 map
//     https://github.com/tursics/opendataday2025
//
//   - Musterseite der basemap.de Produkt- und Dienstgruppe
//     https://basemap.de/data/produkte/web_vektor/anwendungsbeispiele/baudenkmale_brandenburg.html

const map = new maplibregl.Map({
    container: 'map',
    style: 'https://sgx.geodatenzentrum.de/gdz_basemapde_vektor/styles/bm_web_gry.json',
    center: [9.8559648,54.1684689], // Nortorf, Mitte von Schleswig-Holstein
    zoom: 10,
    pitch: 60,
    bearing: -17.6,
    canvasContextAttributes: {antialias: true},
});

// Choose your district
const districtID = "KI";
const availableDistricts = {
    "SH": {
            "label": "Schleswig-Holstein",
            "url": "https://opendata.tomkyle.net/denkmallisten/denkmalpflege/schleswig-holstein/denkmalliste-SH.geojson",
            "bbox": [ 7.881995, 53.370067, 11.310879, 55.052943 ]
    },
    "HEI": {
            "label": "Kreis Dithmarschen",
            "url": "https://opendata.tomkyle.net/denkmallisten/denkmalpflege/dithmarschen/denkmalliste-HEI.geojson",
            "bbox": [ 8.858207, 53.887534, 9.384961, 54.368415 ]
    },
    "FL": {
            "label": "Kreis Flensburg",
            "url": "https://opendata.tomkyle.net/denkmallisten/denkmalpflege/flensburg/denkmalliste-FL.geojson",
            "bbox": [ 9.394202, 54.75418, 9.483568, 54.822442 ]
    },
    "RZ": {
            "label": "Kreis Herzogtum Lauenburg",
            "url": "https://opendata.tomkyle.net/denkmallisten/denkmalpflege/herzogtum-lauenburg/denkmalliste-RZ.geojson",
            "bbox": [ 10.239922, 53.370067, 10.932635, 53.79956 ]
    },
    "KI": {
            "label": "Stadt Kiel",
            "url": "https://opendata.tomkyle.net/denkmallisten/denkmalpflege/kiel/denkmalliste-KI.geojson",
            "bbox": [ 10.053875, 54.266947, 10.199913, 54.433326 ]
    },
    "NMS": {
            "label": "Stadt Neumünster",
            "url": "https://opendata.tomkyle.net/denkmallisten/denkmalpflege/neumuenster/denkmalliste-NMS.geojson",
            "bbox": [ 9.9461, 54.035553, 10.025128, 54.145694 ]
    },
    "NF": {
            "label": "Kreis Nordfriesland",
            "url": "https://opendata.tomkyle.net/denkmallisten/denkmalpflege/nordfriesland/denkmalliste-NF.geojson",
            "bbox": [ 8.290646, 54.283931, 9.292738, 55.052943 ]
    },
    "OH": {
            "label": "Kreis Ostholstein",
            "url": "https://opendata.tomkyle.net/denkmallisten/denkmalpflege/ostholstein/denkmalliste-OH.geojson",
            "bbox": [ 10.424258, 53.885147, 11.310879, 54.527358 ]
    },
    "PI": {
            "label": "Kreis Pinneberg",
            "url": "https://opendata.tomkyle.net/denkmallisten/denkmalpflege/pinneberg/denkmalliste-PI.geojson",
            "bbox": [ 7.881995, 53.566285, 9.962425, 54.188118 ]
    },
    "PLOE": {
            "label": "Kreis Plön",
            "url": "https://opendata.tomkyle.net/denkmallisten/denkmalpflege/ploen/denkmalliste-PLOE.geojson",
            "bbox": [ 10.027483, 54.068962, 10.707931, 54.416118 ]
    },
    "RD-ECK": {
            "label": "Kreis Rendsburg-Eckernförde",
            "url": "https://opendata.tomkyle.net/denkmallisten/denkmalpflege/rendsburg-eckernfoerde/denkmalliste-RD-ECK.geojson",
            "bbox": [ 9.410845, 54.05733, 10.176435, 54.624933 ]
    },
    "SL": {
            "label": "Kreis Schleswig-Flensburg",
            "url": "https://opendata.tomkyle.net/denkmallisten/denkmalpflege/schleswig-flensburg/denkmalliste-SL.geojson",
            "bbox": [ 9.147596, 54.301964, 10.036308, 54.87621 ]
    },
    "SE": {
            "label": "Kreis Segeberg",
            "url": "https://opendata.tomkyle.net/denkmallisten/denkmalpflege/segeberg/denkmalliste-SE.geojson",
            "bbox": [ 9.823097, 53.663058, 10.537723, 54.090132 ]
    },
    "IZ": {
            "label": "Kreis Steinburg",
            "url": "https://opendata.tomkyle.net/denkmallisten/denkmalpflege/steinburg/denkmalliste-IZ.geojson",
            "bbox": [ 9.255118, 53.727447, 9.816187, 54.046452 ]
    }
};


if (!availableDistricts[districtID]) {
    throw new Error(`District with ID "${districtID}" not found in sources map`);
}
const districtData = availableDistricts[districtID];


// Add a new layer to the map with data for the district identified by districtID.
map.on('load', () => {

    // Add a new layer to the map using the KI data
    map.addLayer({
        'id': 'Kulturdenkmale',
        'type': 'fill-extrusion',
        'source': {
            'type': 'geojson',
            'data': districtData.url
        },
        'paint': {
            'fill-extrusion-color': 'rgba(215, 59, 59, 1)',
            'fill-extrusion-opacity': 0.8,
            'fill-extrusion-height': 20
        }
    });

    map.fitBounds(districtData.bbox);
});


// LatLong tools:
//
// https://www.gpskoordinaten.de/
//
// https://nominatim.oklabflensburg.de/search?q=norderstra%C3%9Fe%2049,%20flensburg
// https://nominatim.oklabflensburg.de/search?q=norderstra%C3%9Fe%2049,%20flensburg&format=geocodejson
// https://nominatim.oklabflensburg.de/search?q=norderstra%C3%9Fe%2049,%20flensburg&format=geocodejson&addressdetails=1
