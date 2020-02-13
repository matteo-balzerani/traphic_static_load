const readCsv = require("gtfs-utils/read-csv");
import Agency from "./../model/agency";
import { folder } from "./const";

function onSave(err: any) {
  if (err) {
    console.log(err);
  }
}

export function loadAgencyFromFile() {
  readCsv(folder.concat("agency.txt"))
    .on("error", console.error)
    .on("readable", function(this: any) {
      let data;
      while ((data = this.read())) {
        var agency = new Agency(data);
        agency.save(onSave);
      }
    });
}
