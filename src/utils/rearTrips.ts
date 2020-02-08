var fs = require("fs");
const readCsv = require("gtfs-utils/read-csv");
import Trip from "./../model/trip";

export let loadTripsFromFile = () => {
  var a = readCsv("/usr/src/app/rome_static/trips.txt")
    .on("error", console.error)
    .on("readable", function() {
      let data;
      while ((data = this.read())) {
        var trip = new Trip(data);
        trip.save((err: any) => {
          if (err) {
            console.log(err);
          }
        });
      }
    });
};
