/* eslint-disable*/

export const displayMap = (locations) => {
  mapboxgl.accessToken = 'pk.eyJ1Ijoic293NDA2MyIsImEiOiJja2ZzOWFieGowNWtnMnpzM2hxenU5eG1yIn0.refV6-DIwUNHAX4djPlFWA';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/sow4063/ckfs9unrf0m0y19o2tm7z726w',
    scrollZoom: false,
    // center: [-118.138485, 34.086154],
    // zoom: 4,
    // interactive: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    // Create Marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add Marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    }).setLngLat(loc.coordinates).addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
    
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
}


