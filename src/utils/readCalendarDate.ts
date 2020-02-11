var fs = require("fs");
const readCsv = require("gtfs-utils/read-csv");
import calendarDates from "./../model/calendarDates";
import { folder } from "./const";

export let loadCalendarFromFile = () => {
  var a = readCsv(folder.concat("calendar_dates.txt"))
    .on("error", console.error)
    .on("readable", function(this: any) {
      let data;
      while ((data = this.read())) {
        var calendarDate = new calendarDates(data);
        calendarDate.save((err: any) => {
          if (err) {
            console.log(err);
          }
        });
      }
    });
};
