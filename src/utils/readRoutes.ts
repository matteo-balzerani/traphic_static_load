var fs = require("fs");
const readCsv = require("gtfs-utils/read-csv");
import Route from "./../model/route";
import { folder } from "./const";

export let loadRoutesFromFile = () => {
  var a = readCsv(folder.concat("routes.txt"))
    .on("error", console.error)
    .on("readable", function(this: any) {
      let data;
      while ((data = this.read())) {
        var route = new Route(data);
        route.save((err: any) => {
          if (err) {
            console.log(err);
          }
        });
      }
    });
};
