"use strict";

const seamap = require("sea-map");
const config = fetch("/configuration/config.json");
const versions = fetch("/configuration/version.json");
const about = fetch("/configuration/about.html");

// We load the config/version/about files dynamically, partly for historical reasons
// (as they were before we used webpack), but also so they can be queried (by shipshape)
// and updated manually in a deployed site when necessary.
const getJson = (r) => r.json();
const getText = (r) => r.text();
Promise
  .all([config.then(getJson), versions.then(getJson), about.then(getText)])
  .then(([config, versions, about]) => {
    const combinedConfig = { ...config, ...versions, aboutHtml: about };
    seamap(combinedConfig);
  });
