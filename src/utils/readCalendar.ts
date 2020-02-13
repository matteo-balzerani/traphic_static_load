const readCsv = require("gtfs-utils/read-csv");
import Calendar from "./../model/calendar";
import { folder } from "./const";

function onSave(err: any) {
  if (err) {
    console.log(err);
  }
}

export function loadCalendarFromFile() {
  readCsv(folder.concat("calendar.txt"))
    .on("error", console.error)
    .on("readable", function(this: any) {
      let data;
      while ((data = this.read())) {
        var calendar = new Calendar(data);
        calendar.save(onSave);
      }
    });
}
