"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readCsv = require("gtfs-utils/read-csv");
var trip_1 = __importDefault(require("../model/trip"));
var const_1 = require("./const");
function onSave(err) {
    if (err) {
        console.log(err);
    }
}
function loadTripsFromFile() {
    readCsv(const_1.folder.concat("trips.txt"))
        .on("error", console.error)
        .on("readable", function () {
        var data;
        while ((data = this.read())) {
            var trip = new trip_1.default(data);
            trip.save(onSave);
        }
    });
}
exports.loadTripsFromFile = loadTripsFromFile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZFRyaXBzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsidXRpbHMvcmVhZFRyaXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDL0MsdURBQWlDO0FBQ2pDLGlDQUFpQztBQUVqQyxTQUFTLE1BQU0sQ0FBQyxHQUFRO0lBQ3RCLElBQUksR0FBRyxFQUFFO1FBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNsQjtBQUNILENBQUM7QUFFRCxTQUFnQixpQkFBaUI7SUFDL0IsT0FBTyxDQUFDLGNBQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDaEMsRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDO1NBQzFCLEVBQUUsQ0FBQyxVQUFVLEVBQUU7UUFDZCxJQUFJLElBQUksQ0FBQztRQUNULE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUU7WUFDM0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxjQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNuQjtJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQVZELDhDQVVDIn0=