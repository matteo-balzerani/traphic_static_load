var fs = require("fs");
const readCsv = require("gtfs-utils/read-csv");
import calendarDates from "./../model/calendarDates";

export let loadCalendarFromFile = () => {
  var a = readCsv("../files/rome_static_gtfs/calendar_dates.txt")
    .on("error", console.error)
    .on("readable", function() {
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
