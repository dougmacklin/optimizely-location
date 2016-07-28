import { Promise } from 'es6-promise';

window.optimizelyLocationPromise = new Promise((res, rej) => {
  var timer = setInterval(() => {
    var userLocation = optimizely.data.visitor.location;
    if (typeof userLocation !== "undefined") {
      clearInterval(timer);
      res(userLocation);
    }
  }, 100);
});
