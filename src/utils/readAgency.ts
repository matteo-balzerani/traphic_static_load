var fs = require("fs");
const readCsv = require("gtfs-utils/read-csv");
import Agency from "./../model/agency";
import { folder } from "./const";

export let loadAgencyFromFile = () => {
  var a = readCsv(folder.concat("agency.txt"))
    .on("error", console.error)
    .on("readable", function(this: any) {
      let data;
      while ((data = this.read())) {
        var agency = new Agency(data);
        agency.save((err: any) => {
          if (err) {
            console.log(err);
          }
        });
      }
    });
};
