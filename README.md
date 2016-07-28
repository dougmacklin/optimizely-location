# Optimizely Location

Unlike the rest of the [Optimizely data object](http://developers.optimizely.com/javascript/reference/), `optimizely.data.visitor.location` is not immediately ready when the Optimizely page snippet has loaded since it has to fetch the data from a 3rd party.

## Setup

Before this script can work, there needs to be an Optimizely experiment with a geo-targeted audience condition running on your site.

1. Create an Optimizely experiment using your site's URL
2. Add an audience with a **Location** condition
3. Change the **URL Targeting** setting to `null`
4. Save and start the experiment

Note, by setting the URL Targeting to null, you are ensuring that the experiment will not use any of your Optimizely monthly uniques.

You can check to see if location is now enabled by inspecting element on your site and typing the following into the Console:

```
optimizely.data.visitor.location
```

This should return an object with location data. If it is `null`, please ensure that you have followed the above steps correctly.

## Usage

```
npm install optimizely-location --save
```

This script assigns a Promise called `optimizelyLocation` to the global scope that will resolve when the user's location is ready. First import the script:

```
import optimizelyLocation from 'optimizely-location';
```

Then wrap your location-based code in the Promise `.then()` syntax

```js
optimizelyLocation.then((res) => {
  // your user-location based code, eg:
  console.log(res); // will log something like {continent: "NA", country: "US", region: "CA", city: "SANFRANCISCO"}
});
```

This promise will try to find the user location in intervals of 100 milliseconds for 3 seconds before rejecting.
