const readCsv = require("gtfs-utils/read-csv");
import Route from "./../model/route";
import { folder } from "./const";

function onSave(err: any) {
  if (err) {
    console.log(err);
  }
}

export function loadRoutesFromFile() {
  readCsv(folder.concat("routes.txt"))
    .on("error", console.error)
    .on("readable", function(this: any) {
      let data;
      while ((data = this.read())) {
        var route = new Route(data);
        route.save(onSave);
      }
    });
}
