import { Promise } from 'es6-promise'; // polyfill

// assign it to the global scope like the optimizely data object
window.optimizelyLocation = new Promise((resolve, reject) => {
  // check to see if it is already ready
  if (typeof userLocation !== "undefined") resolve(userLocation);

  // otherwise check every 100 milliseconds
  else {
    var timer = setInterval(() => {
      var userLocation = optimizely.data.visitor.location;
      if (typeof userLocation !== "undefined") {
        clearInterval(timer);
        resolve(userLocation);
      }
    }, 100);
  }
});
