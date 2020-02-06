var fs = require("fs");
const readCsv = require("gtfs-utils/read-csv");
import Shape from "./../model/shape";

export let loadShapesFromFile = () => {
  var a = readCsv("../files/rome_static_gtfs/shapes.txt")
    .on("error", console.error)
    .on("readable", function() {
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
