"use strict";

var _es6Promise = require("es6-promise");

window.optimizelyLocationPromise = new _es6Promise.Promise(function (res, rej) {
  var timer = setInterval(function () {
    var userLocation = optimizely.data.visitor.location;
    if (typeof userLocation !== "undefined") {
      clearInterval(timer);
      res(userLocation);
    }
  }, 100);
});