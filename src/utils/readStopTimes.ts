const readCsv = require("gtfs-utils/read-csv");
import StopTime from "./../model/stopTimes";
import { folder } from "./const";

function onSave(err: any) {
  if (err) {
    console.log(err);
  }
}

export function loadStopTimesFromFile() {
  readCsv(folder.concat("stop_times.txt"))
    .on("error", console.error)
    .on("readable", function(this: any) {
      let data;
      while ((data = this.read())) {
        var stopTimes = new StopTime(data);
        stopTimes.save(onSave);
      }
    });
}
