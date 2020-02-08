var fs = require("fs");
const readCsv = require("gtfs-utils/read-csv");
import StopTime from "./../model/stopTimes";

export let loadStopTimesFromFile = () => {
  var a = readCsv("/usr/src/app/rome_static/stop_times.txt")
    .on("error", console.error)
    .on("readable", function() {
      let data;
      while ((data = this.read())) {
        var stopTime = new StopTime(data);
        stopTime.save((err: any) => {
          if (err) {
            console.log(err);
          }
        });
      }
    });
};
