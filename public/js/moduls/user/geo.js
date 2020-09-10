export function getGeo() {
    let options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      
      function success(pos) {
        let crd = pos.coords;
      
		localStorage.setItem('GEO', crd.latitude + '; ' + crd.longitude + '; ' + crd.accuracy);
      };
      
      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      };
      
      let geo = navigator.geolocation.getCurrentPosition(success, error, options);
      return geo;
}