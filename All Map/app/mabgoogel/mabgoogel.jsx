// App.js
import React, { useEffect } from 'react';

const Map = () => {
  useEffect(() => {
    const loadScript = (url) => {
      const script = document.createElement('script');
      script.src = url;
      script.async = true;
      document.head.appendChild(script);
    };

    loadScript('https://polyfill.io/v3/polyfill.min.js?features=default');
    loadScript(
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyCuTilAfnGfkZtIx0T3qf-eOmWZ_N2LpoY&libraries=maps&v=beta'
    );

    script.onload = () => {
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.4220656, lng: -122.0840897 },
        zoom: 14,
        mapId: 'DEMO_MAP_ID',
      });
    };
  }, []);

  return (
    <div
      id="map"
      style={{ width: '100%', height: '100vh', border: '0' }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></div>
  );
};

const App = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Map />
    </div>
  );
};

export default App;
