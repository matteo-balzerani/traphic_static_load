var fs = require("fs");
const readCsv = require("gtfs-utils/read-csv");
import Calendar from "./../model/calendar";
import { folder } from "./const";

export let loadCalendarFromFile = () => {
  var a = readCsv(folder.concat("calendar.txt"))
    .on("error", console.error)
    .on("readable", function(this: any) {
      let data;
      while ((data = this.read())) {
        var calendar = new Calendar(data);
        calendar.save((err: any) => {
          if (err) {
            console.log(err);
          }
        });
      }
    });
};
