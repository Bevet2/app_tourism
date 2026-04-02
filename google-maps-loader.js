(function () {
  let loadingPromise = null;

  window.routePiloteGoogleMapsLoader = {
    load() {
      if (window.google && window.google.maps) {
        return Promise.resolve(window.google.maps);
      }

      if (loadingPromise) {
        return loadingPromise;
      }

      const apiKey = window.APP_CONFIG && window.APP_CONFIG.googleMapsApiKey;
      if (!apiKey) {
        return Promise.reject(new Error("missing-google-maps-api-key"));
      }

      loadingPromise = new Promise((resolve, reject) => {
        const callbackName = "__routePiloteGoogleMapsInit";

        window[callbackName] = () => {
          delete window[callbackName];
          resolve(window.google.maps);
        };

        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&loading=async&callback=${callbackName}`;
        script.async = true;
        script.defer = true;
        script.onerror = () => {
          delete window[callbackName];
          loadingPromise = null;
          reject(new Error("failed-to-load-google-maps"));
        };

        document.head.appendChild(script);
      });

      return loadingPromise;
    },
  };
})();
