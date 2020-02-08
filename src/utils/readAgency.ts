var fs = require("fs");
const readCsv = require("gtfs-utils/read-csv");
import Agency from "./../model/agency";

export let loadAgencyFromFile = () => {
  var a = readCsv("/usr/src/app/rome_static/agency.txt")
    .on("error", console.error)
    .on("readable", function() {
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
