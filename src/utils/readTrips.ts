var fs = require("fs");
const readCsv = require("gtfs-utils/read-csv");
import Trip from "../model/trip";
import { folder } from "./const";

export let loadTripsFromFile = () => {
  var a = readCsv(folder.concat("trips.txt"))
    .on("error", console.error)
    .on("readable", function(this: any) {
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
