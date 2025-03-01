# Workshop Open Data Day 2025

Check out the result: https://tursics.github.io/opendataday2025/

## About the project

Am Internationalen Open Data Day 2025 am 1. März haben wir uns in Flensburg getroffen. Nach ein paar Inpulsvorträgen am Vormittag haben wir am Nachmittag Online-Karten vom Scratch gebaut. Ich habe die Idee der neuen Denkmalliste aus Schleswig-Holstein aufgegriffen und auf einer Karte visualisiert.

## Implementation

1. The basic structure of a map was set up with HTML, JS, CSS and a little boilerplate. I chose MapLibre GL JS because it allows you to use vector maps that can be zoomed, rotated, tilted as desired and thus also display 3D buildings.

2. In order to display data on the maps, I looked for GeoJSON files in the Open Data Portal of Schleswig-Holstein, which also contain data from Flensburg. I found these: https://opendata.schleswig-holstein.de/dataset/geodaten-denkmalliste-sh-2025-03-01

3. Unfortunately, the contents of the GeoJSON file are not displayed on the map. In QGIS I changed the projection from UTM 32 to WGS 84 and thus converted all coordinates.

4. The resulting file was still too large to upload to GitHub. That's why I only filtered out the monuments in Flensburg in QGIS.

5. Finished.

The raster data map layer from OK Lab Flensburg (https://tiles.oklabflensburg.de/fosm/{z}/{x}/{y}.png) was presented and used in the workshop. I couldn't manage that and switched to the vector layer from Basemap.de.
