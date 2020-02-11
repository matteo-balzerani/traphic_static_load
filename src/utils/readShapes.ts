var fs = require("fs");
const readCsv = require("gtfs-utils/read-csv");
import Shape from "./../model/shape";
import { folder } from "./const";

export let loadShapesFromFile = () => {
  var a = readCsv(folder.concat("shapes.txt"))
    .on("error", console.error)
    .on("readable", function(this: any) {
      let data;
      while ((data = this.read())) {
        var shape = new Shape(data);
        shape.save((err: any) => {
          if (err) {
            console.log(err);
          }
        });
      }
    });
};
