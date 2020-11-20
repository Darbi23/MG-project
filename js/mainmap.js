//map config//
let map;

function initMap() {
  const myLatlng = { lat: 41.712, lng: 44.804 };

  map = new google.maps.Map(document.getElementById("map"), {
    mapId: "278779b8b89d33a7", 
    zoom: 14,
    center: myLatlng, 
    disableDefaultUI: true,
  });
  const marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: "Click to zoom",
  });

  map.addListener("center_changed", () => {
    // 3 seconds after the center of the map has changed, pan back to the
    // marker.
    window.setTimeout(() => {
      map.panTo(marker.getPosition());
    }, 3000);
  });
  marker.addListener("click", () => {
    map.setZoom(8);
    map.setCenter(marker.getPosition());
  });
}