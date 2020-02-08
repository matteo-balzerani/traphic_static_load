var fs = require("fs");
const readCsv = require("gtfs-utils/read-csv");
import Route from "./../model/route";

export let loadRoutesFromFile = () => {
  var a = readCsv("/usr/src/app/rome_static/routes.txt")
    .on("error", console.error)
    .on("readable", function() {
      let data;
      while ((data = this.read())) {
        var route = new Route(data);
        route.save((err: any) => {
          if (err) {
            console.log(err);
          }
        });
      }
    });
};
