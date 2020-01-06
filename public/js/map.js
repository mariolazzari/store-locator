mapboxgl.accessToken =
  "pk.eyJ1IjoibWFyaW9sYXp6YXJpIiwiYSI6ImNqdzg1cjF1OTJsamc0OXFrajdlMHdzeTIifQ.edeBZ58oqdjEMtM_gpX_NA";
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  zoom: 9,
  center: [9.9782721, 45.5634485]
});
