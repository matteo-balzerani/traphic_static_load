const readCsv = require("gtfs-utils/read-csv");
import Shape from "./../model/shape";
import { folder } from "./const";

function onSave(err: any) {
  if (err) {
    console.log(err);
  }
}

export function loadShapesFromFile() {
  readCsv(folder.concat("shapes.txt"))
    .on("error", console.error)
    .on("readable", function(this: any) {
      let data;
      while ((data = this.read())) {
        var shape = new Shape(data);
        shape.save(onSave);
      }
    });
}
