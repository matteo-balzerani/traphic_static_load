const readCsv = require("gtfs-utils/read-csv");
import Stop from "./../model/stop";
import { folder } from "./const";

function onSave(err: any) {
  if (err) {
    console.log(err);
  }
}

export function loadStopsFromFile() {
  readCsv(folder.concat("stops.txt"))
    .on("error", console.error)
    .on("readable", function(this: any) {
      let data;
      while ((data = this.read())) {
        var stop = new Stop(data);
        stop.save(onSave);
      }
    });
}
