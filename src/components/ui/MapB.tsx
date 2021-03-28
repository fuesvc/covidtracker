import React, { useEffect } from 'react';
import { StyledMapContainer } from './style/map-style';
import mapboxgl from 'mapbox-gl';

const Map = (props: any) => {
  // const { countries, casesType, center, zoom } = props;
  const { center, zoom } = props;
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoibmF2YWxtIiwiYSI6ImNrbXM2NTAxbDBlbmcyeHJzMHdleHcxcWIifQ.w-SIf2Zea-ok8B0KJMJRJw';
    var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/navalm/ckms7h0dq2gpo17nxsc7gn7ut',
        center: center, // starting position
        zoom: zoom // starting zoom
    });
    map.resize();
    map.addControl(new mapboxgl.NavigationControl());
    map.on('move', () => {
      console.log(map.getCenter().lng.toFixed(4));
      console.log(map.getCenter().lat.toFixed(4));
      console.log(map.getZoom().toFixed(2));
    });
  }, [center, zoom]);

  return (
    <StyledMapContainer>
      <div id="map"></div>
      <pre id="info"></pre>
    </StyledMapContainer>
  );
}

export default Map;