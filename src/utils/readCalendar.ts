var fs = require("fs");
const readCsv = require("gtfs-utils/read-csv");
import Calendar from "./../model/calendar";

export let loadCalendarFromFile = () => {
  var a = readCsv("/usr/src/app/rome_static/calendar.txt")
    .on("error", console.error)
    .on("readable", function() {
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
