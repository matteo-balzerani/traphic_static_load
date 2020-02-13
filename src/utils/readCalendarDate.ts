const readCsv = require("gtfs-utils/read-csv");
import CalendarDates from "./../model/calendarDates";
import { folder } from "./const";

function onSave(err: any) {
  if (err) {
    console.log(err);
  }
}

export function loadCalendarFromFile() {
  readCsv(folder.concat("calendar_dates.txt"))
    .on("error", console.error)
    .on("readable", function(this: any) {
      let data;
      while ((data = this.read())) {
        var calendarDates = new CalendarDates(data);
        calendarDates.save(onSave);
      }
    });
}
