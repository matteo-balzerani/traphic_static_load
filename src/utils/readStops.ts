var fs = require("fs");
const readCsv = require("gtfs-utils/read-csv");
import Stop from "./../model/stop";

export let loadStopsFromFile = () => {
  var a = readCsv("../files/rome_static_gtfs/stops.txt")
    .on("error", console.error)
    .on("readable", function() {
      let data;
      while ((data = this.read())) {
        var stop = new Stop(data);
        stop.save((err: any) => {
          if (err) {
            console.log(err);
          }
        });
      }
    });
};
