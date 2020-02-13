const readCsv = require("gtfs-utils/read-csv");
import Trip from "../model/trip";
import { folder } from "./const";

function onSave(err: any) {
  if (err) {
    console.log(err);
  }
}

export function loadTripsFromFile() {
  readCsv(folder.concat("trips.txt"))
    .on("error", console.error)
    .on("readable", function(this: any) {
      let data;
      while ((data = this.read())) {
        var trip = new Trip(data);
        trip.save(onSave);
      }
    });
}
