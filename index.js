// Based on
//
//   - Thomas Tursics' OpenDataDay25 map
//     https://github.com/tursics/opendataday2025
//
//   - Musterseite der basemap.de Produkt- und Dienstgruppe
//     https://basemap.de/data/produkte/web_vektor/anwendungsbeispiele/baudenkmale_brandenburg.html

import { availableDistricts } from './districts.js';

// Re-export availableDistricts so consumers don't need to import from both files
export { availableDistricts } from './districts.js';

/**
 * Initialize the map with a specific district ID
 * @param {string} districtID - The ID of the district to display
 * @param {Object} [options] - Optional map configuration options
 * @returns {Object} The created map instance
 */
export function initializeMap(districtID, options = {}) {
    const defaultOptions = {
        center: [9.8559648, 54.1684689], // Nortorf, Mitte von Schleswig-Holstein
        zoom: 10,
        pitch: 60,
        bearing: -17.6
    };

    const mapOptions = {...defaultOptions, ...options};

    const map = new maplibregl.Map({
        container: 'map',
        style: 'https://sgx.geodatenzentrum.de/gdz_basemapde_vektor/styles/bm_web_gry.json',
        center: mapOptions.center,
        zoom: mapOptions.zoom,
        pitch: mapOptions.pitch,
        bearing: mapOptions.bearing,
        canvasContextAttributes: {antialias: true},
        attributionControl: {
            customAttribution: "github.com/tomkyle/opendataday2025"
        }
    });

    // Check if the requested district exists
    if (!availableDistricts[districtID]) {
        throw new Error(`District with ID "${districtID}" not found in available districts`);
    }

    const districtData = availableDistricts[districtID];

    // Add a new layer to the map with data for the district identified by districtID
    map.on('load', () => {
        // Add a new layer to the map using the district data
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

        // Fit map to district bounds
        if (districtData.bbox && Array.isArray(districtData.bbox) && districtData.bbox.length === 4) {
            map.fitBounds(districtData.bbox);
        }
    });

    return map;
}

// LatLong tools:
//
// https://www.gpskoordinaten.de/
//
// https://nominatim.oklabflensburg.de/search?q=norderstra%C3%9Fe%2049,%20flensburg
// https://nominatim.oklabflensburg.de/search?q=norderstra%C3%9Fe%2049,%20flensburg&format=geocodejson
// https://nominatim.oklabflensburg.de/search?q=norderstra%C3%9Fe%2049,%20flensburg&format=geocodejson&addressdetails=1
