const fs = require("fs");

const stuff = require("../lib/getStuff")();

fs.writeFile(
  `${__dirname}/../public/stuff.json`,
  JSON.stringify(stuff, null, 2),
  err => {
    if (err) {
      console.error("There was an error, uh oh.", err);
      return -1;
    } else {
      console.info("Wrote the stuff, success.");
      return -1;
    }
  }
);
