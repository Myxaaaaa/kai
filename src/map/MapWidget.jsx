import React, { useEffect } from 'react';

function loadScript(url, callback) {
  const script = document.createElement('script');
  script.type = 'text/javascript';

  if (script.readyState) { 
    script.onreadystatechange = function() {
      if (script.readyState === 'loaded' || script.readyState === 'complete') {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else { 
    script.onload = function() {
      callback();
    };
  }

  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}

function MapWidget() {
  useEffect(() => {
    loadScript('https://widgets.2gis.com/js/DGWidgetLoader.js', () => {
      new window.DGWidgetLoader({
        width: 640,
        height: 600,
        borderColor: 'red',
        pos: {
          lat: 42.8596632035672,
          lon: 74.53572392463686,
          zoom: 18
        },
        opt: {
          city: 'bishkek'
        },
        org: [{ id: '70000001019347882' }],
        container: document.getElementById('map-widget')
      });
    });
  }, []);

  return (
    <div>
      <a className="dg-widget-link" href="http://2gis.kg/bishkek/firm/70000001019347882/center/74.53572392463686,42.8596632035672/zoom/18?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=bigMap">Посмотреть на карте Бишкека</a>
      <div className="dg-widget-link">
        <a href="http://2gis.kg/bishkek/firm/70000001019347882/photos/70000001019347882/center/74.53572392463686,42.8596632035672/zoom/17?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=photos">Фотографии компании</a>
      </div>
      <div className="dg-widget-link">
        <a href="http://2gis.kg/bishkek/center/74.535406,42.859588/zoom/18/routeTab/rsType/bus/to/74.535406,42.859588╎Кыргызский авиационный институт им. И. Абдраимова?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=route">Найти проезд до Кыргызский авиационный институт им. И. Абдраимова</a>
      </div>
      <div id="map-widget" style={{ width: '640px', height: '600px', border: '1px solid red', margin: '20px auto' }}></div>
      <noscript style={{color: '#fff', fontSize: '10px', fontWeight: 'bold'}}>
        Включите JavaScript для просмотра <a href="http://2gis.kg/bishkek/firm/70000001019347882">2ГИС: Организации</a>.
      </noscript>
    </div>
  );
}

export default MapWidget;
