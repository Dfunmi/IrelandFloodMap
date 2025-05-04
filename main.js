// Initialize map centered on Wicklow
const map = L.map('map').setView([52.97, -6.32], 10);

// Base map
const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// --- WMS Layers from GeoServer ---


const floodZones = L.tileLayer.wms("http://localhost:8080/geoserver/wicklow/wms", {
  layers: 'flood_zones',
  format: 'image/png',
  transparent: true,
  attribution: "OPW Flood Data"
});

const rivers = L.tileLayer.wms("http://localhost:8080/geoserver/wicklow/wms", {
  layers: 'rivers',
  format: 'image/png',
  transparent: true,
  attribution: "OSM Rivers"
});

const roads = L.tileLayer.wms("http://localhost:8080/geoserver/wicklow/wms", {
  layers: 'major_roads',
  format: 'image/png',
  transparent: true,
  attribution: "OSM Roads"
});

const population = L.tileLayer.wms("http://localhost:8080/geoserver/wicklow/wms", {
  layers: 'population',
  format: 'image/png',
  transparent: true,
  attribution: "CSO Population"
});

// Layer control
const baseMaps = {
  "OpenStreetMap": osm
};

const overlayMaps = {
  "Flood Zones": floodZones,
  "Rivers": rivers,
  "Roads": roads,
  "Population": population
};

L.control.layers(baseMaps, overlayMaps).addTo(map);
// --- Legend ---
const legend = L.control({ position: 'bottomright' });

legend.onAdd = function () {
  const div = L.DomUtil.create('div', 'legend');
  div.innerHTML = `
    <h4>Map Legend</h4>
    <i style="background: blue"></i> Flood Zones<br>
    <i style="background: lightblue"></i> Rivers<br>
    <i style="background: orange"></i> Roads<br>
    <i style="background: green"></i> Population Density<br>
  `;
  return div;
};

legend.addTo(map);
